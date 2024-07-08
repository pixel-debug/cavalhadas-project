import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-5">
      <p className="font-montserrat xl:text-md text-xs text-neutral-900 mb-2">
        Redes Sociais
      </p>
      <div className="flex flex-row gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="xl:text-md text-xm transition-colors"
        >
          <FaFacebook />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="xl:text-md text-xm transition-colors"
        >
          <FaTwitter />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="xl:text-md text-xm transition-colors"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="xl:text-md text-xm transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};
