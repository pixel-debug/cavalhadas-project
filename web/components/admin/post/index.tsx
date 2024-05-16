import { Box } from "@/components/common/box";
import { Input } from "@/components/common/input";
import { CreatePostForm } from "./form";
import { Post } from "@/types/types";
import { createPost } from "@/external/api/postApi";

export const WritePost = () => {
  const handleSubmit = async (data: Post) => {
    console.log(data);
    const post = await createPost({
      ...data,
      authorId: 1,
    });
    if (post) console.log("posts");
    else console.log("no posts");
  };

  return (
    <div className="mt-10">
      <Box title="Escreva uma postagem">
        <CreatePostForm onSubmitForm={handleSubmit} />
      </Box>
    </div>
  );
};
