// import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function About() {
  return (
    <section>
      {/* <h2 className="text-center md:text-start text-3xl">About</h2> */}
      <h2 className="text-center text-2xl my-2 border-b-[1px] pb-1">About</h2>
      <div className="flex flex-col md:mt-10">
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
          <div></div>
        </article>
        <article className="p-4 border rounded m-3">
          <h3 className="text-center md:text-start text-xl">
            Technologies used in this page?
          </h3>
          <p className="text-center md:text-start">
            In this page I used Next.js, Typescript, Zustand and Tailwind
          </p>
          {/* <div className="flex gap-3">
          <div className="flex flex-col justify-center items-center">
            <SiNextdotjs size={25} />
            <h5>Next</h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <SiTailwindcss size={25} />
            <h5>Tailwind</h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <SiTypescript size={25} />
            <h5>Typescript</h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h6>No icon</h6>
            <h5>Zustand</h5>
          </div>
        </div> */}
        </article>
      </div>
    </section>
  );
}
