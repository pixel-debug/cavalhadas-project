import { AboutUsIntroText } from "@/components/aboutUs/intro";
import { Box } from "@/components/common/box";
import { Button } from "@/components/common/button";
import { SliderComponent } from "@/components/common/slider";
import { PageTitles, PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { sliderMockedData } from "@/utils/mockedData/slider";
import { useRouter } from "next/router";

const AboutUsPage = () => {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_MEMBER_PAGE));
  };

  const isAdmin = true;
  return (
    <>
      <p className="py-10 justify-center flex text-red-900 font-itim text-3xl">
        {PageTitles.ABOUT_US}
      </p>
      <div className="flex flex-col items-center  pt-5">
        <div className=" w-[80%]">
          <AboutUsIntroText />
        </div>
      </div>
      <Box title={"Quem somos"}>
        <SliderComponent subjects={sliderMockedData} />
      </Box>
      {isAdmin ? (
        <div className="flex justify-center mt-4">
          <div className="xl:w-[40%] w-[30%]">
            <Button text={"Adicionar membro"} action={navigation} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AboutUsPage;
