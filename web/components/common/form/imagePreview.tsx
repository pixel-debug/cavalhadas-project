import { UseFormRegisterReturn } from "react-hook-form";
import { useRef, useState } from "react";
import Image from "next/image";

interface ImageUploadProps {
  register: UseFormRegisterReturn;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ register }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="w-full">
      <input
        id="image"
        type="file"
        {...register}
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <button
        className="bg-blue-900 rounded p-2 w-full mb-5"
        type="button"
        onClick={handleClick}
      >
        Imagem
      </button>
      {imagePreview && (
        <div className="flex justify-center">
          <Image
            src={imagePreview}
            alt="Image Preview"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
};
