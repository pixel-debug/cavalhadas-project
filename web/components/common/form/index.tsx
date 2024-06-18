import { AdminContext } from "@/context/useAdminContext";
import { createImageOnFirebase } from "@/external/firebase/firebaseImageURL";
import { DynamicFormProps } from "@/types/types";
import { useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { DynamicForm } from "./form";
import { Loading } from "../loading";

export const Form = <T extends FieldValues>({
  fields,
  onSubmit,
}: DynamicFormProps<T>) => {
  const [loading, setLoading] = useState(false);

  const handleForm = async (data: T) => {
    setLoading(true);
    let imageData = data.image;
    if (data.image instanceof FileList) {
      const file = data.image[0];
      imageData = await createImageOnFirebase(file);
    }

    onSubmit({ ...data, image: imageData });
    setLoading(false);
  };

  return (
    <>
      <DynamicForm fields={fields} onSubmit={handleForm} />
      {loading ? <Loading /> : null}
    </>
  );
};
