import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderProps, Member } from "@/types/types";
import { SliderList } from "./slider";
import { AdminContext } from "@/context/useAdminContext";
import { imageSrc } from "@/utils/formatters";
import { useState, useContext } from "react";
import { CustomImage } from "../image";
import { Modal } from "../modal";
import { ItemAction } from "./actions";

export const SliderComponent = ({ subjects }: SliderProps) => {
  const [modal, setModal] = useState<{
    openModal: boolean;
    selected: Member | null;
  }>({
    openModal: false,
    selected: null,
  });
  const { admin } = useContext(AdminContext);

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

  const actions = (item: Member) => {
    console.log(item.id);
    setModal({
      openModal: true,
      selected: item,
    });
  };

  return (
    <div className="flex flex-col justify-center pt-10">
      {groupedSubjects.map((group, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-start text-xl font-bold font-nutito">
            {group.title}
          </h2>
          <SliderList subjects={group.subjects} itemAction={actions} />
        </div>
      ))}
      {modal.openModal && modal.selected && admin && (
        <Modal closeModal={() => {}}>
          <div className="h-[40vh] w-[60vh]">
            <ItemAction
              item={modal.selected}
              onClose={() =>
                setModal({
                  openModal: false,
                  selected: null,
                })
              }
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
