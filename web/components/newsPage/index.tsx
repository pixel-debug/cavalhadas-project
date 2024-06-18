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
  const { handleSubmit, setValue } = useForm<Post>({
    defaultValues: {
      title: selectedNews.title,
      content: selectedNews.content,
    },
  });

  const { mutate } = useMutation((postData: Post) => {
    return updatePost(selectedNews.id, { ...postData });
  });

  const onSubmit = (data: Post) => {
    mutate(data);
  };

  const handleTitleChange = (event: React.FocusEvent<HTMLParagraphElement>) => {
    if (isAdmin) {
      setValue("title", event.target.textContent || "");
    }
  };

  const handleContentChange = (
    event: React.FocusEvent<HTMLParagraphElement>
  ) => {
    if (isAdmin) {
      setValue("content", event.target.textContent || "");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-[60vh] w-full" onClick={() => openImage(true)}>
        <CustomImage
          src={imageSrc(selectedNews?.image)}
          alt=""
          objectFit="cover"
        />
      </div>
      <p className="font-montserrat text-xs xl:text-xm text-neutral-600">
        {formatDate(selectedNews.createdAt, true)}
      </p>
      <p
        className="my-5 font-montserrat text-lg xl:text-2xl text-neutral-900"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={handleTitleChange}
        suppressContentEditableWarning={true}
      >
        {selectedNews.title}
      </p>
      <p
        className="font-montserrat text-xm xl:text-md text-neutral-900"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={handleContentChange}
        suppressContentEditableWarning={true}
      >
        {selectedNews.content}
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
