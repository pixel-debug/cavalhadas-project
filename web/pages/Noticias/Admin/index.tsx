import { Box } from "@/components/common/box";
import { FormField, Post } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { convertFileToString } from "@/utils/convertFileToString";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";

const WritePost = () => {
  const { admin } = useContext(AdminContext);

  const handleSubmit = async (data: Post) => {
    if (data.image instanceof FileList) {
      const file = data.image[0];
      const imageData = await convertFileToString(file);
      data.image = imageData;
    }
    const post = await createPost({
      ...data,
      authorId: admin ? admin.id : 0,
    });
    if (post) console.log("take back to noticias page");
    else console.log("no posts");
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
