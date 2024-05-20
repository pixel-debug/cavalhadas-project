import { Button } from "@/components/common/button";
import { ImagePreview } from "@/components/common/form/imagePreview";
import { Input } from "@/components/common/input";
import { FormProps, Post } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PostForm } from "./inputsTypes/postForm";

export const Form = ({ onSubmitForm, type }: FormProps<Post>) => {
  const { register, handleSubmit } = useForm<Post>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleForm = async (data: Post) => {
    onSubmitForm(data);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-full pr-10">
          {type === "posts" && <PostForm register={register} />}
          {/* {type === "sponsor" && <SponsorForm register={register} />}
          {type === "memeber" && <MemberForm register={register} />} */}
        </div>
        <div className="w-[40%]">
          <Input
            label="Imagem"
            id="image"
            register={register("image")}
            placeholder="coloque uma imagem ..."
            type="file"
            onChange={handleChange}
          />
          {imagePreview && <ImagePreview imagePreview={imagePreview} />}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="xl:w-[40%] w-full">
          <Button type="submit" text={"Salvar"} />
        </div>
      </div>
    </form>
  );
};
