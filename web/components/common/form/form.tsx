import { Button } from "@/components/common/button";
import { useForm, FieldValues, Path, FieldError } from "react-hook-form";
import { ImageUpload } from "./imagePreview";
import { DynamicFormProps } from "@/types/types";
import { fieldComponents } from "@/types/formFields";
import { PdfUploader } from "./pdfUploader";

export const DynamicForm = <T extends FieldValues>({
  fields,
  onSubmit,
}: DynamicFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<T>();

  const hasImageField = fields.some((field) => field.name === "image");
  const hasPdfField = fields.some((field) => field.name === "pdf");

  const handleForm = async (data: T) => {
    // onSubmit(data);
    // reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="flex flex-col w-full ">
        {fields.map((field) => {
          const error = errors[field.name as keyof T] as FieldError | undefined;
          const FieldComponent =
            fieldComponents[field.type as keyof typeof fieldComponents];

          if (!FieldComponent) {
            return null;
          }

          return (
            <FieldComponent
              key={field.id}
              label={field.label}
              id={field.id}
              placeholder={field.placeholder}
              register={register(field.name as Path<T>, {
                required: field.required,
                valueAsNumber: field.type === "number" ? true : false,
              })}
              type={field.type}
              error={error}
            />
          );
        })}
      </div>
      <div
        className={`flex ${
          hasPdfField ? "justify-center" : "justify-start"
        } items-start space-x-8 mt-5`}
      >
        {hasImageField && (
          <div className="flex flex-col items-center w-2/5">
            <ImageUpload register={register("image" as Path<T>)} />
          </div>
        )}
        {hasPdfField && (
          <div className="flex flex-col items-center w-2/5">
            <PdfUploader setValue={setValue} />
          </div>
        )}
      </div>

      <div className="flex justify-end mt-4">
        <div className="xl:w-[30%] w-[45%]">
          <Button type="submit" text={"Salvar"} />
        </div>
      </div>
    </form>
  );
};
