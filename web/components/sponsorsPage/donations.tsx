import { Box } from "../common/box";
import { Button } from "../common/button";

export const Donations = () => {
  return (
    <div className="py-10">
      <Box>
        <div className="p-10 flex xl:flex-row flex-col items-center">
          <p className="xl:pb-0 pb-10 w-[80%] text-neutral-50 font-itim text-2xl">
            Para mais informações ou doações ligue:
          </p>
          <Button text={"31 98694-5696"} action={undefined} />
        </div>
      </Box>
    </div>
  );
};
