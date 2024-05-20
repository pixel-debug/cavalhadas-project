import { NewsContentProps, Post } from "@/types/types";
import { CustomImage } from "../common/image";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const NewsContent = ({ selectedNews, openImage }: NewsContentProps) => {
  const { register, handleSubmit, setValue } = useForm<Post>();
  const onSubmit = (data: Post) => {
    console.log(data);
  };

  const isAdmin = true;

  useEffect(() => {
    setValue("title", selectedNews.title);
    setValue("content", selectedNews.text);
  }, [selectedNews, setValue]);

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
        {...(isAdmin ? { contentEditable: true } : {})}
        {...register("title")}
      >
        {selectedNews.title}
      </p>
      <p
        className="font-itim text-xm xl:text-md text-neutral-900"
        {...(isAdmin ? { contentEditable: true } : {})}
        {...register("content")}
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
