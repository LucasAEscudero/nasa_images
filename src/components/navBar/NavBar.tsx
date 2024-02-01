"use client";
import { useState } from "react";
import { BsList } from "react-icons/bs";

import NavItems from "../navItems/NavItems";

const NavBar = () => {
  const [responsive, setResponsive] = useState<boolean>(false);

  const toggle = () => {
    setResponsive(!responsive);
  };

  return (
    // <header className="sticky top-0 z-50 bg-stone-900">
    //   <nav className="flex justify-between bg-stone-900 h-12 px-6 rounded-b">
    //     <div className="flex items-center">
    //       <h2 className="hover:cursor-default">
    //         NASA <span className="font-semibold">Images</span>
    //       </h2>
    //       <div
    //         className={`${
    //           responsive && "top-[8%]"
    //         } duration-500 md:static absolute bg-[#1c1917] md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5`}
    //       >
    //         <ul className="flex md:flex-row flex-col flex-start md:items-center">
    //           <li
    //             className={`hover:bg-stone-800 p-2 rounded hover:cursor-pointer m-1 md:my-0 ${
    //               path === "/" ? "bg-stone-800" : ""
    //             }`}
    //             onClick={() => router.push("/")}
    //           >
    //             <span className={`p-1 ${path === "/" ? "border-b-[1px]" : ""}`}>
    //               Home
    //             </span>
    //           </li>

    //           <li
    //             className={`hover:bg-stone-800 p-2 rounded hover:cursor-pointer m-1 md:my-0 ${
    //               path === "/galery" ? "bg-stone-800" : ""
    //             }`}
    //             onClick={() => router.push("/galery")}
    //           >
    //             <span
    //               className={`p-1 ${
    //                 path === "/galery" ? "border-b-[1px]" : ""
    //               }`}
    //             >
    //               Galery
    //             </span>
    //           </li>
    //           <li
    //             className={`hover:bg-stone-800 p-2 rounded hover:cursor-pointer m-1 md:my-0 ${
    //               path === "/favorites" ? "bg-stone-800" : ""
    //             }`}
    //             onClick={() => router.push("/favorites")}
    //           >
    //             <span
    //               className={`p-1 ${
    //                 path === "/favorites" ? "border-b-[1px]" : ""
    //               }`}
    //             >
    //               Favorites
    //             </span>
    //           </li>
    //           <li className="md:hidden">
    //             {responsive && (
    //               <input type="date" className="bg-stone-800 rounded" />
    //             )}
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-6">
    //       {/* <input type="date" className="bg-stone-800 rounded" /> */}
    //       <button
    //         type="button"
    //         className={`${
    //           responsive ? "text-xl" : "text-3xl"
    //         } cursor-pointer md:hidden absolute`}
    //         onClick={toggle}
    //       >
    //         {responsive ? "X" : <BsList />}
    //       </button>
    //     </div>
    //   </nav>
    // </header>
    <header className="bg-stone-900 rounded-b sticky top-0 z-50">
      <nav className="flex justify-between items-center h-12 relative mx-2">
        <div className="flex items-center gap-8">
          <h2 className="hover:cursor-default">
            NASA <span className="font-semibold">Images</span>
          </h2>
          <ul className="hidden md:flex md:gap-4">
            <NavItems path="/" name="Home" />
            <NavItems path="/galery" name="Galery" />
            <NavItems path="/favorites" name="Favorites" />
          </ul>
          {/* </div> */}
        </div>
        <div className="px-4 cursor-pointer md:hidden flex items-center">
          <button onClick={toggle} className={`${responsive && "text-xl"}`}>
            {responsive ? "X" : <BsList size={25} />}
          </button>
        </div>
      </nav>
      {responsive && (
        <div className="flex flex-rows justify-center mb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            <NavItems path="/" name="Home" />
            <NavItems path="/galery" name="Galery" />
            <NavItems path="/favorites" name="Favorites" />
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
