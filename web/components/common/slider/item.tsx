import { SliderItemProps } from "@/types/types";
import { CustomImage } from "../image";
import { formatDate, imageSrc } from "@/utils/formatters";

export const Item = ({ item, itemAction }: SliderItemProps) => {
  return (
    <div
      className="xl:mx-10 mx-2 flex flex-col"
      onClick={() => itemAction(item)}
    >
      <div className="border-4 border-blue-500 rounded-full bg-neutral-500 xl:h-[35vh] md:h-[15vh] h-[20vh]">
        <CustomImage src={imageSrc(item.image)} alt={"people"} rounded />
      </div>
      <div className="flex flex-col mt-3 items-center">
        <p className="font-montserrat text-xm text-neutral-800">{item.name}</p>
        <p className="font-montserrat text-xs text-neutral-500">
          {item.role} - {formatDate(item.memberSince)}
        </p>
      </div>
    </div>
  );
};
