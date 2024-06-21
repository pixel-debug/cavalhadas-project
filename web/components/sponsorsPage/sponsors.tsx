import { CustomImage } from "../common/image";
import { SponsorListProps } from "@/types/types";

export const Sponsors = ({ sponsors }: SponsorListProps) => {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-2 xl:gap-20 gap-5 w-full">
      {sponsors.map((item: any, index: number) => (
        <div className="xl:h-[50vh] h-[40vh]" key={index}>
          <CustomImage key={item.id} src={item.image} alt={item.alt} rounded />
        </div>
      ))}
    </div>
  );
};
