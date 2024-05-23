import { SliderItemProps } from "@/types/types";
import { CustomImage } from "../image";

export const Item = ({ item }: SliderItemProps) => {
  const imageSrc =
    typeof item.image === "string"
      ? item.image
      : URL.createObjectURL(item.image);

  return (
    <div className="xl:mx-10 mx-2 flex flex-col">
      <div className="border-4 border-blue-500 rounded-full bg-neutral-500 xl:h-[35vh] md:h-[15vh] h-[20vh]">
        <CustomImage src={imageSrc} alt={"people"} rounded />
      </div>
      <div className="flex flex-col mt-3 items-center">
        <p className="font-montserrat text-xm text-neutral-800">{item.name}</p>
        <p className="font-montserrat text-xs text-neutral-500">
          {item.role} - {item.memberSince}
        </p>
      </div>
    </div>
  );
};
