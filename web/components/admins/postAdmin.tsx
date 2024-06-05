import { Box } from "@/components/common/box";
import { FormField, Post } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { useState } from "react";
import { Loading } from "../common/loading";

export const WritePost = () => {
  const [loading, setLoading] = useState(false);

  const { mutate } = useMutation(createPost, {
    onSuccess: (data) => {
      const message = "success";
      setLoading(false);
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = async (data: Post) => {
    setLoading(true);
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
        <DynamicForm<Post> fields={postFormFields} onSubmit={handleSubmit} />{" "}
      </Box>
      {loading ? <Loading /> : null}
    </div>
  );
};
