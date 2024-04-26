import { ImageProps } from "@/types/types";
import Image from "next/image";

export const CustomImage = ({ src, alt, objectFit, rounded }: ImageProps) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition="center"
        className={`w-full h-full ${rounded ? "rounded-full" : "none"}`}
      />
    </div>
  );
};
