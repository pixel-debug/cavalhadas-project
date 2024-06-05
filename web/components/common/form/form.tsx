import { Button } from "@/components/common/button";
import { useForm, FieldValues, Path, FieldError } from "react-hook-form";
import { InputField } from "./inputField";
import { Checkbox } from "../checkbox";
import { ImageUpload } from "./imagePreview";
import { TextArea } from "../textArea";
import { DynamicFormProps } from "@/types/types";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";
import FirebaseImage from "@/external/firebase/firebaseImageURL";

export const DynamicForm = <T extends FieldValues>({
  fields,
  onSubmit,
}: DynamicFormProps<T>) => {
  const { admin } = useContext(AdminContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<T>();

  const handleForm = async (data: T) => {
    let imageData = data.image;
    if (data.image instanceof FileList) {
      const file = data.image[0];
      imageData = await FirebaseImage(file);
    }

    onSubmit({ ...data, authorId: admin ? admin.id : 0, image: imageData });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-full xl:w-[50%] w-full">
          {fields.map((field) => {
            const error = errors[field.name as keyof T] as
              | FieldError
              | undefined;

            switch (field.type) {
              case "input":
                return (
                  <InputField
                    key={field.id}
                    label={field.label}
                    id={field.id}
                    placeholder={field.placeholder}
                    register={register(field.name as Path<T>, {
                      required: field.required,
                    })}
                    error={error}
                  />
                );
              case "textarea":
                return (
                  <TextArea
                    key={field.id}
                    label={field.label}
                    id={field.id}
                    register={register(field.name as Path<T>, {
                      required: field.required,
                    })}
                    placeholder={field.placeholder}
                  />
                );
              case "checkbox":
                return (
                  <>
                    <Checkbox
                      key={field.id}
                      label={field.label}
                      id={field.id}
                      register={register(field.name as Path<T>)}
                    />
                    <p className="text-xs font-montserrat text-neutral-800 mt-2">
                      * Caso for uma amazonas, por favor, não selecione nada
                    </p>
                  </>
                );
              default:
                return null;
            }
          })}
        </div>
        <div className="xl:w-[40%] w-full xl:pl-0 pl-10">
          {fields.some((field) => field.type === "image") && (
            <ImageUpload register={register("image" as Path<T>)} />
          )}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <div className="xl:w-[40%] w-[45%]">
          <Button type="submit" text={"Salvar"} />
        </div>
      </div>
    </form>
  );
};
