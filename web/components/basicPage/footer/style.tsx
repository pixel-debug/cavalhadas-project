import redKnight from "../../../assets/logo/embaixadores/vermelho.svg";
import blueKnight from "../../../assets/logo/embaixadores/azul.svg";
import Image from "next/image";

export const FooterComponent = () => {
  return (
    <div className="mt-10 bg-blue-200 flex flex-row justify-between p-5">
      <div className="flex flex-row">
        <div className="lg:w-[40vh] w-1/3">
          <Image src={redKnight} alt="Follow us on Twitter" />
        </div>
        <div className="xl:pt-10 pt-5">
          <p className="font-itim xl:text-xl text-xm text-neutral-900 mb-2">
            Venha nos ver!
          </p>
          <p className="font-itim xl:text-md text-xm w-[90%] xl:w-[100%] text-neutral-700">
            Rua dos esportes, nº 18, Amarantina, Ouro Preto
          </p>
        </div>
      </div>
      <div className="lg:w-[40vh] w-1/3">
        <Image src={blueKnight} alt="Follow us on Twitter" />
      </div>
    </div>
  );
};
