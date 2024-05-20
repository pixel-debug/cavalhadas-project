import { Box } from "@/components/common/box";
import { Post } from "@/types/types";
import { createPost } from "@/external/api/postApi";
import { convertFileToString } from "@/utils/convertFileToString";
import { Form } from "@/components/common/form";

const WritePost = () => {
  const handleSubmit = async (data: Post) => {
    if (data.image instanceof FileList) {
      const file = data.image[0];
      const imageData = await convertFileToString(file);
      data.image = imageData;
    }
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
        <Form onSubmitForm={handleSubmit} type={"posts"} />
      </Box>
    </div>
  );
};

export default WritePost;
