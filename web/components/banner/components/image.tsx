import { BannerImageProps } from "@/types/types";
import Image from "next/image";
export const BannerImage = ({ src, alt }: BannerImageProps) => {
  return (
    <div className="px-10 py-5 w-full">
      <div className="mt-10">
        <Image src={src} alt="Follow us on Twitter" />
      </div>
    </div>
  );
};
