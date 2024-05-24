import { Box } from "@/components/common/box";
import { FormField, Post } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";
import { convertFileToString } from "@/utils/formatters";
import { useMutation } from "react-query";

const WritePost = () => {
  const { admin } = useContext(AdminContext);

  const { mutate } = useMutation(createPost, {
    onSuccess: (data) => {
      console.log(data);
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = async (data: Post) => {
    if (data.image instanceof FileList) {
      const file = data.image[0];
      const imageData = await convertFileToString(file);
      data.image = imageData;
    }
    const post = {
      ...data,
      authorId: admin ? admin.id : 0,
    };

    mutate(post);
  };

  const postFormFields: FormField[] = [
    ...getInput("post").map((input) => ({
      ...input,
      type: "input" as const,
    })),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <div className="mt-10">
      <Box title="Escreva uma postagem">
        <DynamicForm<Post> fields={postFormFields} onSubmit={handleSubmit} />{" "}
      </Box>
    </div>
  );
};

export default WritePost;
