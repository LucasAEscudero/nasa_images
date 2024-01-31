"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-2 py-1" style={{ borderTop: "1px solid white" }}>
      <div>
        <p className="text-xs text-center">
          Image rendering page from the NASA API
        </p>
        <p className="text-xs text-center">
          Developed by Lucas Agustin Escudero
        </p>
      </div>
      <div className="flex justify-center space-x-2 mt-2">
        <Link
          href="https://www.linkedin.com/in/lucas-escudero-54195322b/"
          target="_blank"
          className="hover:text-blue-700"
        >
          <FaLinkedin size={25} />
        </Link>
        <Link
          href="https://github.com/LucasAEscudero"
          target="_blank"
          className="hover:text-[#1c1917]"
        >
          <FaGithub size={25} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
