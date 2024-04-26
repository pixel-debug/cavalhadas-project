import { NewsContentProps } from "@/types/types";
import { CustomImage } from "../Common/image";

export const NewsContent = ({ selectedNews, openImage }: NewsContentProps) => {
  return (
    <>
      <div className="h-[60vh] w-full" onClick={() => openImage(true)}>
        <CustomImage src={selectedNews?.image} alt="" objectFit="cover" />
      </div>
      <p className="font-itim text-xs xl:text-xm text-neutral-600">
        {selectedNews.date}
      </p>
      <p className="my-5 font-itim text-lg xl:text-2xl text-neutral-900">
        {selectedNews.title}
      </p>
      <p className="font-itim text-xm xl:text-md text-neutral-900">
        {selectedNews.text}
      </p>
    </>
  );
};
