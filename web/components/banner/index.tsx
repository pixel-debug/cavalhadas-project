import { BannerProps } from "@/types/types";
import { Button } from "../common/button";
import { BannerText } from "./components/text";
import { CustomImage } from "../common/image";
import { useRouter } from "next/router";
import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";

export const Banner = ({
  title,
  subtitle,
  hasButton,
  isMainPage,
}: BannerProps) => {
  const router = useRouter();
  const image =
    "https://www.ipatrimonio.org/wp-content/uploads/2018/11/ipatrimonio_Ouro-Preto-Cavalhada-_Foto-Ane-Souz-Fonte-Prefeitura-Municipal.jpg";

  const goToAboutUsPage = () => {
    router.push(usedRouters(PagesRouters.ABOUT_US_PAGE));
  };

  return (
    <div className="h-screen">
      <div className="bg-black opacity-50 absolute inset-0 z-0">
        <CustomImage src={image} alt={""} objectFit="cover" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <BannerText title={title} text={subtitle} isMainPage={isMainPage} />
        {hasButton && (
          <div className="mt-10 mb-2 lg:w-[20%] w-1/3">
            <Button text={"Saiba mais"} action={() => goToAboutUsPage()} />
          </div>
        )}
      </div>
    </div>
  );
};
