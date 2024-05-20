import { TextArea } from "../../textArea";
import { Input } from "../../input";
import { PostFormProps } from "@/types/types";

export const PostForm = ({ register }: PostFormProps) => {
  return (
    <>
      <div className="w-[50%] xl:w-full">
        <Input
          label="Título"
          id="title"
          register={register("title")}
          placeholder="escreva o título da postagem ..."
        />
      </div>

      <TextArea
        label="Conteúdo"
        id="content"
        register={register("content")}
        placeholder="escreva o corpo da postagem ..."
      />
    </>
  );
};
