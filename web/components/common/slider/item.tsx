import { SliderItemProps } from "@/types/types";
import { CustomImage } from "../image";

export const Item = ({ item }: SliderItemProps) => {
  return (
    <div className="xl:mx-10 mx-2 flex flex-col">
      <div className="border-4 border-yellow-500 rounded-full bg-neutral-500 xl:h-[35vh] md:h-[15vh] h-[20vh]">
        <CustomImage src={item.image} alt={""} rounded />
      </div>
      <div className="flex flex-col mt-3 items-center">
        <p className="font-itim text-xm text-neutral-800">Nome Sobrenome</p>
        <p className="font-itim text-xs text-neutral-400">
          Cargo - desde quando
        </p>
      </div>
    </div>
  );
};
