import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderSettings } from "@/utils/sliderSettings";
import { SliderProps, SliderType } from "@/types/types";
import { Item } from "./item";

export const SliderComponent = ({ subjects }: SliderProps) => {
  const settings = {
    ...sliderSettings,
  };

  return (
    <div className="flex flex-col justify-center pt-10 ">
      <div className="w-[100%] pb-10">
        <Slider {...settings} arrows={false}>
          {subjects.map((subject: SliderType, index: number) => (
            <Item key={"people -" + index} item={subject} />
          ))}
        </Slider>
      </div>
      <div className="w-[100%] py-10">
        <Slider {...settings} arrows={false}>
          {subjects.map((subject: SliderType, index: number) => (
            <Item key={"people -" + index} item={subject} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
