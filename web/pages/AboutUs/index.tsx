import { AboutUsIntroText } from "@/components/aboutUs/intro";
import { Box } from "@/components/common/box";
import { SliderComponent } from "@/components/common/slider";
import { PageTitles } from "@/types/enums";
import { sliderMockedData } from "@/utils/mockedData/slider";

const AboutUsPage = () => {
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
    </>
  );
};

export default AboutUsPage;
