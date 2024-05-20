import { NewsContentProps, Post } from "@/types/types";
import { CustomImage } from "../common/image";
import { useForm } from "react-hook-form";

export const NewsContent = ({ selectedNews, openImage }: NewsContentProps) => {
  const { handleSubmit, setValue } = useForm<Post>({
    defaultValues: {
      title: selectedNews.title,
      content: selectedNews.text,
    },
  });

  const onSubmit = (data: Post) => {
    console.log(data);
  };

  const isAdmin = true;

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
        <CustomImage src={selectedNews?.image} alt="" objectFit="cover" />
      </div>
      <p className="font-itim text-xs xl:text-xm text-neutral-600">
        {selectedNews.date}
      </p>
      <p
        className="my-5 font-itim text-lg xl:text-2xl text-neutral-900"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={handleTitleChange}
        suppressContentEditableWarning={true}
      >
        {selectedNews.title}
      </p>
      <p
        className="font-itim text-xm xl:text-md text-neutral-900"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={handleContentChange}
        suppressContentEditableWarning={true}
      >
        {selectedNews.text}
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
