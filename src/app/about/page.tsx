import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <section>
      {/* <h2 className="text-center md:text-start text-3xl">About</h2> */}
      <h2 className="text-center text-2xl my-2 border-b-[1px] pb-1">About</h2>
      <div className="flex flex-col md:mt-[5rem]">
        <article className="p-4 border rounded m-3">
          <h3 className="text-center md:text-start text-xl">Who I am?</h3>
          <p className="text-center md:text-start">
            I am <span className="font-bold">Lucas Escudero</span>, a{" "}
            <span className="font-bold">FullStack Web Developer</span> in
            constant growth, committed to innovation and prepared to address new
            challenges. My approach is based on offering modern and efficient
            web solutions. My skill set includes strong analytical thinking,
            discipline and dedication, backed by a strong ability to analyze and
            solve problems. Additionally, my ability to work as a team
            complements my proactive approach to achieving goals
            collaboratively.
          </p>
          <div className="flex justify-center gap-2 space-x-2 mt-2">
            <Link
              href="https://www.linkedin.com/in/lucas-escudero-54195322b/"
              target="_blank"
              className="hover:text-blue-700 flex justify-center"
            >
              <FaLinkedin size={25} className="mr-1" /> LinkedIn
            </Link>
            <Link
              href="https://github.com/LucasAEscudero"
              target="_blank"
              className="hover:text-[#1c1917] flex justify-center"
            >
              <FaGithub size={25} className="mr-1" /> GitHub
            </Link>
            <Link
              href="https://github.com/LucasAEscudero/nasa_images"
              target="_blank"
              className="hover:text-orange-700 flex justify-center"
            >
              <FaCode size={25} className="mr-1" /> Code
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
