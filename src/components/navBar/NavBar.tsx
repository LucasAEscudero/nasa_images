"use client";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import nasaIcon from "@/assets/icon.png";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import NavItems from "../navItems/NavItems";

const NavBar = () => {
  const [responsive, setResponsive] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const router = useRouter();
  const today = format(new Date(), "yyyy-MM-dd");

  const toggle = () => {
    setResponsive(!responsive);
  };
  // cambiar any plis
  const handlerInputSearch = (event: any) => {
    setDate(event.target.value);
  };

  const handlerSearch = () => {
    router.push(`/image/${date}`);
    setDate("");
  };

  return (
    <header className="bg-stone-900 rounded-b sticky top-0 z-50">
      <nav className="flex justify-between items-center h-12 relative mx-2">
        <div className="flex items-center justify-between gap-8 w-full">
          {/* <h2 className="hover:cursor-default">
             <span className="font-semibold">Images</span>
          </h2> */}
          {/* start nav */}
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <Image src={nasaIcon} alt="Nasa" width={50} height={50} />
              <h2 className="hover:cursor-default">Images</h2>
            </div>
            <ul className="hidden md:flex md:gap-3">
              <NavItems path="/" name="Home" />
              <NavItems path="/galery" name="Galery" />
              <NavItems path="/favorites" name="Favorites" />
            </ul>
          </div>
          {/* end nav */}
          <div className="hidden md:flex md:gap-2">
            <input
              type="date"
              className="bg-black p-1 rounded-full"
              value={date}
              onChange={handlerInputSearch}
              max={today}
            />
            <button
              className="bg-black mx-2 p-3 rounded-full hover:bg-stone-700"
              type="button"
              onClick={handlerSearch}
            >
              <FaSearch />
            </button>
          </div>
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
            <div className="flex gap-2">
              <input
                type="date"
                className="bg-black p-1 rounded-full"
                value={date}
                onChange={handlerInputSearch}
                max={today}
              />
              <button
                className="bg-black mx-2 p-3 rounded-full hover:bg-stone-700"
                type="button"
                onClick={handlerSearch}
              >
                <FaSearch />
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
