import { createImageOnFirebase } from "@/external/firebase/firebaseImageURL";
import { DynamicFormProps } from "@/types/types";
import { FieldValues } from "react-hook-form";
import { DynamicForm } from "./form";

export const Form = <T extends FieldValues>({
  fields,
  onSubmit,
}: DynamicFormProps<T>) => {
  const handleForm = async (data: T) => {
    let imageData = data.image;

    if (data.image instanceof File) {
      const file = data.image;
      imageData = await createImageOnFirebase(file);
    }
    onSubmit({ ...data, image: imageData });
  };

  return <DynamicForm fields={fields} onSubmit={handleForm} />;
};
