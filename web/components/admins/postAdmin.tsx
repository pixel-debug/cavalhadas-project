import { Box } from "@/components/common/box";
import { FormField, Post } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { Form } from "@/components/common/form";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";

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

  const handleSubmit = async (data: Post) => {
    (data.authorId = admin ? admin.id : 0), mutate(data);
  };

  const postFormFields = [
    ...getInput("post"),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <div className="mt-10  flex items-center">
      <Box title="Escreva uma postagem">
        <Form<Post> fields={postFormFields} onSubmit={handleSubmit} />{" "}
      </Box>
    </div>
  );
};
