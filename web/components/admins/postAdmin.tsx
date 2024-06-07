import { Box } from "@/components/common/box";
import { FormField, Post } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { Form } from "@/components/common/form";

export const WritePost = () => {
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
    mutate(data);
  };

  const postFormFields: FormField[] = [
    ...getInput("post").map((input) => ({
      ...input,
      type: input.type,
    })),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <div className="mt-10">
      <Box title="Escreva uma postagem">
        <Form<Post> fields={postFormFields} onSubmit={handleSubmit} />{" "}
      </Box>
    </div>
  );
};
