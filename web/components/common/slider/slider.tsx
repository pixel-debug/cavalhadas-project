import { Member, SliderProps } from "@/types/types";
import Slider from "react-slick";
import { Item } from "./item";
import { sliderSettings } from "@/utils/sliderSettings";

export const SliderList = ({ subjects }: SliderProps) => {
  const settings = {
    ...sliderSettings,
    infinite: subjects.length > 3,
  };

  return (
    <div className="w-[100%] pb-10">
      <Slider {...settings} arrows={false}>
        {subjects.map((subject: Member, index: number) => (
          <Item key={"admin-" + index} item={subject} />
        ))}
      </Slider>
    </div>
  );
};
