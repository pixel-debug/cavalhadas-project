import { deleteImageFromFirebase } from "@/external/firebase/firebaseImageURL";
import { CustomImage } from "../common/image";
import { SponsorListProps } from "@/types/types";
import { deleteSponsor } from "@/external/api/sponsorApi";
import { Button } from "../common/button";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";

export const Sponsors = ({ sponsors }: SponsorListProps) => {
  const { admin } = useContext(AdminContext);

  const handleDelete = async () => {
    const deleteResults = await Promise.all(
      sponsors.map(async (item: any) => {
        return await deleteImageFromFirebase(item.image as string);
      })
    );
    if (deleteResults) {
      await deleteSponsor();
      alert("Patrocinadores deletados com sucesso");
    }
  };
  return (
    <>
      <div className="grid xl:grid-cols-3 grid-cols-2 xl:gap-20 gap-5 w-full">
        {sponsors.map((item: any, index: number) => (
          <div className="xl:h-[50vh] h-[40vh]" key={index}>
            <CustomImage
              key={item.id}
              src={item.image}
              alt={item.alt}
              rounded
            />
          </div>
        ))}
      </div>
      {admin ? (
        <div className="flex justify-center mt-10">
          <div className="xl:w-[40%] w-[30%]">
            <Button text="Deletar todos" action={handleDelete} />
          </div>
        </div>
      ) : null}
    </>
  );
};
