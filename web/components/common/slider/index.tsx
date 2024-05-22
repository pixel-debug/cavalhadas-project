import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderProps, Member } from "@/types/types";
import { SliderList } from "./slider";

export const SliderComponent = ({ subjects }: SliderProps) => {
  const groupedSubjects = [
    {
      title: "Administradores",
      subjects: subjects.filter((subject: Member) => subject.isAdm),
    },
    {
      title: "Cavalhada Masculina",
      subjects: subjects.filter(
        (subject: Member) => subject.isMale && !subject.isAdm
      ),
    },
    {
      title: "Cavalhada Feminina",
      subjects: subjects.filter(
        (subject: Member) => !subject.isAdm && !subject.isMale
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center pt-10">
      {groupedSubjects.map((group, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-start text-xl font-bold font-nutito">
            {group.title}
          </h2>
          <SliderList subjects={group.subjects} />
        </div>
      ))}
    </div>
  );
};
