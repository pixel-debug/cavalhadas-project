import redKnight from "../../../assets/logo/embaixadores/vermelho.svg";
import blueKnight from "../../../assets/logo/embaixadores/azul.svg";
import Image from "next/image";
import { SocialIcons } from "./socialIcons";
import { Pages } from "./pages";
import { Address } from "./address";

export const FooterComponent = () => {
  return (
    <div className="mt-10 bg-blue-200 px-5 pt-5">
      <div className="flex flex-row justify-between">
        <div className="lg:w-[40vh] w-0">
          <Image src={redKnight} alt="Follow us on Twitter" />
        </div>
        <div className="xl:pt-10 pt-5 flex flex-1 justify-between xl:gap-4 xl:px-5 gap-10">
          <Address />
          <Pages />
          <SocialIcons />
        </div>
        <div className="lg:w-[40vh] w-0">
          <Image src={blueKnight} alt="Follow us on Twitter" />
        </div>
      </div>
      <a
        href="https://github.com/pixel-debug"
        target="_blank"
        rel="noopener noreferrer"
        className="xl:text-xm text-sm transition-colors"
      >
        <span>By Pixel-Debug</span>
      </a>
    </div>
  );
};
