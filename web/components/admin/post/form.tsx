import { Input } from "@/components/common/input";
import { TextArea } from "@/components/common/textArea";
import { FormProps, Post } from "@/types/types";
import { useForm } from "react-hook-form";

export const CreatePostForm = ({ onSubmitForm }: FormProps<Post>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();

  const handleForm = async (data: Post) => {
    if (data.image instanceof FileList) {
      const file = data.image[0];
      const imageData = await convertFileToString(file);
      data.image = imageData;
    }
    onSubmitForm(data);
  };

  const convertFileToString = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const base64Data = base64String.split(",")[1];
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        label="Título"
        id="title"
        register={register("title")}
        placeholder="escreva o título da postagem ..."
      />

      <TextArea
        label="Conteúdo"
        id="content"
        register={register("content")}
        placeholder="escreva o corpo da postagem ..."
      />

      <Input
        label="Imagem"
        id="image"
        register={register("image")}
        placeholder="coloque uma imagem ..."
        type="file"
      />
      <input type="submit" />
    </form>
  );
};
