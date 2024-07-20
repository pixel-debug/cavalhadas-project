import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-5">
      <p className="font-montserrat xl:text-md text-xs text-neutral-900 mb-2">
        Redes Sociais
      </p>
      <div className="flex flex-row gap-4">
        <a
          href="https://www.facebook.com/p/Associa%C3%A7%C3%A3o-dos-Cavaleiros-Mestre-Nico-100064799763363/"
          target="_blank"
          rel="noopener noreferrer"
          className="xl:text-md text-xm transition-colors"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/cavalhadasamarantina/"
          target="_blank"
          rel="noopener noreferrer"
          className="xl:text-md text-xm transition-colors"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:associacaodoscavaleirosmestrenico@gmail.com?subject=SendMail&body=Description"
          target="_blank"
          rel="noopener noreferrer"
          className="xl:text-md text-xm transition-colors"
        >
          <MdOutlineMailOutline />
        </a>
      </div>
    </div>
  );
};
