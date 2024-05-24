import { CustomImage } from "../common/image";
import { SponsorListProps } from "@/types/types";

export const Sponsors = ({ sponsors }: SponsorListProps) => {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="px-10">
        <p className="font-montserrat text-neutral-900 text-base pb-20">
          Somos muitos agradecidos à todos os nossos patrocinadores! Essas
          pessoas incríveis que, além de nos apoiar e acreditar, colaboram
          deixando viva nossa cultura!
        </p>
        <div className="grid xl:grid-cols-3 grid-cols-2 xl:gap-20 gap-5 w-full">
          {sponsors.map((item: any, index: number) => (
            <div className="xl:h-[50vh] h-[40vh]" key={index}>
              <CustomImage
                key={item.id}
                src={item.image}
                alt={item.alt}
                rounded
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
