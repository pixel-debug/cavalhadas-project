import { Box } from "../common/box";
import { Button } from "../common/button";

export const Donations = () => {
  const startWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=31986945696", "_blank");
  };

  return (
    <div className="py-10">
      <Box>
        <div className="p-10 flex xl:flex-row flex-col items-center">
          <p className="xl:pb-0 pb-10 w-[80%] text-neutral-50 font-montserrat text-2xl">
            Para mais informações ou doações ligue:
          </p>
          <Button text={"31 98694-5696"} action={startWhatsapp} />
        </div>
      </Box>
    </div>
  );
};
