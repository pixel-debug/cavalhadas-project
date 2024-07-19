import { Box } from "@/components/common/box";
import { PDF, Post, PostType } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { Form } from "@/components/common/form";
import { useContext, useState } from "react";
import { AdminContext } from "@/context/useAdminContext";
import { createPDFsOnFirebase } from "@/external/firebase/firebasePDF";
import { useRouter } from "next/router";
import useToast from "@/hooks/useToast";
import { Loading } from "../common/loading";
import { IoIosArrowDropleft } from "react-icons/io";

export const WritePost = () => {
  const router = useRouter();
  const { admin } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);

  const { toastSuccess, toastError } = useToast();
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      toastSuccess("Post criado");
      router.back();
    },
    onError: (error) => {
      toastError(error as string);
    },
  });

  const handleSubmit = async (data: PostType) => {
    setLoading(true);
    const post: Post = {
      id: data.id,
      title: data.title,
      content: data.content,
      authorId: admin ? admin.id : 0,
      image: data.image,
      createdAt: new Date(),
    };
    if (data.pdf) {
      const downloadURLs: string[] = await createPDFsOnFirebase(data.pdf);
      const processedPDFs: PDF[] = data.pdf.map((file, index) => ({
        fileName: file.name,
        downloadPath: downloadURLs[index],
      }));
      post.pdfs = processedPDFs;
    }

    setLoading(false);
    mutate(post);
  };

  const postFormFields = [
    ...getInput("post"),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <IoIosArrowDropleft
        className="absolute top-20 left-5 xl:h-10 xl:w-10 h-8 w-8"
        onClick={goBack}
      />
      <div className="xl:mt-20 mt-16 flex items-center xl:w-[80%] w-full">
        <Box title="Escreva uma postagem">
          <Form<PostType> fields={postFormFields} onSubmit={handleSubmit} />{" "}
        </Box>
      </div>
      {loading ? <Loading /> : null}
    </>
  );
};
