import { BannerProps } from "@/types/types";
import { Button } from "../common/button";
import { BannerText } from "./components/text";
import { CustomImage } from "../common/image";

export const Banner = ({
  title,
  subtitle,
  image,
  hasButton,
  isMainPage,
}: BannerProps) => {
  return (
    <div className="h-screen">
      {image && (
        <div className="absolute inset-0 z-0">
          <CustomImage src={image} alt={""} objectFit="cover" />
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <BannerText title={title} text={subtitle} isMainPage={isMainPage} />
        {hasButton && (
          <div className="mt-10 mb-2 lg:w-[20%] w-1/3">
            <Button text={"Saiba mais"} action={() => console.log("clicou")} />
          </div>
        )}
      </div>
    </div>
  );
};
