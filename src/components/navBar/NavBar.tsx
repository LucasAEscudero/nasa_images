"use client";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import Image from "next/image";

import NavItems from "../navItems/NavItems";

const NavBar = () => {
  const [responsive, setResponsive] = useState<boolean>(false);

  const toggle = () => {
    setResponsive(!responsive);
  };

  return (
    <header className="bg-stone-900 rounded-b sticky top-0 z-50">
      <nav className="flex justify-between items-center h-12 relative mx-2">
        <div className="flex items-center gap-8">
          {/* <h2 className="hover:cursor-default">
             <span className="font-semibold">Images</span>
          </h2> */}
          <div className="flex items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
              alt="nasa icon"
              width={55}
              height={55}
            />
            <h2 className="hover:cursor-default">Images</h2>
          </div>
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
