import { AdminContext } from "@/context/useAdminContext";
import FirebaseImage from "@/external/firebase/firebaseImageURL";
import { DynamicFormProps } from "@/types/types";
import { useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { DynamicForm } from "./form";
import { Loading } from "../loading";

export const Form = <T extends FieldValues>({
  fields,
  onSubmit,
}: DynamicFormProps<T>) => {
  const { admin } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);

  const handleForm = async (data: T) => {
    setLoading(true);
    let imageData = data.image;
    if (data.image instanceof FileList) {
      const file = data.image[0];
      imageData = await FirebaseImage(file);
    }

    onSubmit({ ...data, authorId: admin ? admin.id : 0, image: imageData });
    setLoading(false);
  };

  return (
    <>
      <DynamicForm fields={fields} onSubmit={handleForm} />
      {loading ? <Loading /> : null}
    </>
  );
};
