import { NewsContentProps, Post } from "@/types/types";
import { CustomImage } from "../common/image";
import { useForm } from "react-hook-form";
import { formatDate, imageSrc } from "@/utils/formatters";
import { useMutation } from "react-query";
import { updatePost } from "@/external/api/postApi";

export const NewsContent = ({
  selectedNews,
  openImage,
  isAdmin,
}: NewsContentProps) => {
  const { id, title, content, image, createdAt } = selectedNews;

  const { handleSubmit, setValue } = useForm<Post>({
    defaultValues: {
      title,
      content,
    },
  });

  const { mutate } = useMutation((postData: Post) => updatePost(id, postData));

  const onSubmit = (data: Post) => {
    mutate(data);
  };

  const handleChange = (
    event: React.FocusEvent<HTMLParagraphElement>,
    field: keyof Post
  ) => {
    if (isAdmin) {
      const newValue = event.target.textContent || "";
      setValue(field, newValue);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-[60vh] w-full" onClick={() => openImage(true)}>
        <CustomImage src={imageSrc(image)} alt="" objectFit="cover" />
      </div>
      <p className="font-montserrat text-xs xl:text-xm text-neutral-600">
        {formatDate(createdAt, true)}
      </p>
      <p
        className="my-5 font-montserrat text-lg xl:text-2xl text-neutral-900"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={(e) => handleChange(e, "title")}
        suppressContentEditableWarning={true}
      >
        {title}
      </p>
      <p
        className="font-montserrat text-xm xl:text-md text-neutral-900"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={(e) => handleChange(e, "content")}
        suppressContentEditableWarning={true}
      >
        {content}
      </p>
      {isAdmin && (
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
        >
          Salvar edição
        </button>
      )}
    </form>
  );
};
