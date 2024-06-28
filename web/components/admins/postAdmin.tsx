import { Box } from "@/components/common/box";
import { PDF, Post, PostType } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { Form } from "@/components/common/form";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";
import { createPDFsOnFirebase } from "@/external/firebase/firebasePDF";

export const WritePost = () => {
  const { admin } = useContext(AdminContext);
  const { mutate } = useMutation(createPost, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = async (data: PostType) => {
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
        id: index + 1,
        fileName: file.name,
        downloadPath: downloadURLs[index],
        postId: post.id,
      }));
      post.pdf = processedPDFs;
    }
    mutate(post);
  };

  const postFormFields = [
    ...getInput("post"),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <div className="mt-10  flex items-center">
      <Box title="Escreva uma postagem">
        <Form<PostType> fields={postFormFields} onSubmit={handleSubmit} />{" "}
      </Box>
    </div>
  );
};
