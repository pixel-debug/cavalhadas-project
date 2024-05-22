import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="flex flex-row justify-between xl:w-[20%] w-[30%] pl-10">
      <FaWhatsapp />
      <FaFacebook />
      <FaInstagram />
    </div>
  );
};
