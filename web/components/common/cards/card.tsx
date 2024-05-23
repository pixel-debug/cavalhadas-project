import { CardProps } from "@/types/types";
import { CustomImage } from "../image";

export const Card = ({ news, navigation }: CardProps) => {
  return (
    <div className="xl:w-[full]" onClick={() => navigation(news.id)}>
      <div className="xl:h-[250px] h-[200px]">
        <CustomImage src={news.image} alt="" objectFit="cover" />
      </div>

      <p className="text-xs text-neutral-600 font-montserrat">{news.date}</p>
      <p className="text-lg text-neutral-900 font-montserrat leading-tight line-clamp-3">
        {news.title}
      </p>
      <p className="text-xs text-neutral-600 font-montserrat line-clamp-3">
        {news.text}
      </p>
      <p className="text-xs text-blue-200 font-montserrat flex justify-end">
        Veja mais
      </p>
    </div>
  );
};
