import redKnight from "../../../assets/logo/embaixadores/vermelho.svg";
import blueKnight from "../../../assets/logo/embaixadores/azul.svg";
import Image from "next/image";
import { SocialIcons } from "./socialIcons";
import { Pages } from "./pages";
import { Address } from "./address";

export const FooterComponent = () => {
  return (
    <div className="mt-10 bg-blue-200 p-5">
      <div className="flex flex-row justify-between">
        <div className="lg:w-[40vh] w-1/3">
          <Image src={redKnight} alt="Follow us on Twitter" />
        </div>
        <div className="xl:pt-10 pt-5 flex flex-1 justify-between xl:gap-4 xl:px-5 gap-10">
          <Address />
          <Pages />
          <SocialIcons />
        </div>
        <div className="lg:w-[40vh] w-1/3">
          <Image src={blueKnight} alt="Follow us on Twitter" />
        </div>
      </div>
    </div>
  );
};
