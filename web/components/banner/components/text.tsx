import { BannerTextProps } from "@/types/types";

export const BannerText = ({ title, text, isMainPage }: BannerTextProps) => {
  return (
    <div className="flex flex-col items-center">
      <p
        className={`text-center font-itim text-neutral-100 lg:text-3xl text-xl2`}
      >
        {title}
      </p>
      {isMainPage ? (
        <p className="neutral-900 text-lg font-itim">
          - Patrimônio Imaterial de Ouro Preto/MG -
        </p>
      ) : null}
      <p className="w-[60%] font-itim text-neutral-100 text-center lg:text-base text-md mt-5">
        {text}
      </p>
    </div>
  );
};
