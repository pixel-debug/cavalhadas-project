import { ImagePreviewProps } from "@/types/types";

export const ImagePreview = ({ imagePreview }: ImagePreviewProps) => {
  return <img src={imagePreview} alt="Image Preview" />;
};
