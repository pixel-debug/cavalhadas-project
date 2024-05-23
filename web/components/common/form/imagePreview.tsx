import { Input } from "@/components/common/input";
import { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";

interface ImageUploadProps {
  register: UseFormRegisterReturn;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ register }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <Input
        label="Imagem"
        id="image"
        register={register}
        placeholder="coloque uma imagem ..."
        type="file"
        onChange={handleChange}
      />
      {imagePreview && <img src={imagePreview} alt="Image Preview" />}
    </div>
  );
};
