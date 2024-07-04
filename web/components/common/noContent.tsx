import { CustomImage } from "./image";
import ferradura from "../../assets/images/ferradura.png";

export const NoContent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="xl:h-[15vh] xl:w-[15vh] h-[10vh] w-[10vh]">
        <CustomImage src={ferradura} alt={""} />
      </div>
      <p className="text-center text-neutral-900 text-xl font-nunito mt-5">
        Oops, parece que não há nada aqui ainda
      </p>
    </div>
  );
};
