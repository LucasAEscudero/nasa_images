"use client";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import nasaIcon from "@/assets/icon.png";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import NavItems from "../navItems/NavItems";
import toast from "react-hot-toast";

type linkType = {
  path: string;
  name: string;
};

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/galery",
    name: "Galery",
  },
  {
    path: "/favorites",
    name: "Favorites",
  },
  {
    path: "/about",
    name: "About",
  },
];

const NavBar = () => {
  const [responsive, setResponsive] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const router = useRouter();
  const today = format(new Date(), "yyyy-MM-dd");

  const toggle = () => {
    setResponsive(!responsive);
  };

  const handlerInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handlerSearch = () => {
    if (date) {
      const dateArray = date.split("-");
      console.log(dateArray);

      if (Number(dateArray[0]) < 1995) {
        toast.error("Images begin on june 16, 1995", {
          style: {
            background: "#1c1917",
            color: "white",
          },
        });
      } else {
        router.push(`/image/${date}`);
        setDate("");
      }
    } else {
      toast.error("Type a valid date", {
        style: {
          background: "#1c1917",
          color: "white",
        },
      });
    }
  };

  return (
    <header className="bg-stone-900 rounded-b sticky top-0 z-50">
      <nav className="flex justify-between items-center h-12 relative mx-2">
        <div className="flex items-center justify-between gap-8 w-full">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <Image src={nasaIcon} alt="Nasa" width={50} height={50} />
              <h2 className="hover:cursor-default">Images</h2>
            </div>
            <ul className="hidden md:flex md:gap-3">
              {links.map(({ path, name }: linkType, i: number) => (
                <NavItems
                  key={`${path + "-" + name}-${i}`}
                  path={path}
                  name={name}
                />
              ))}
            </ul>
          </div>
          {/* end nav */}
          <div className="hidden md:flex md:gap-2">
            <input
              type="date"
              className="bg-stone-800 p-1 rounded-full"
              value={date}
              onChange={handlerInputSearch}
              max={today}
              min={`1995-06-16`}
            />
            <button
              className="bg-stone-800 mx-2 p-3 rounded-full hover:bg-stone-700"
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
            {links.map(({ path, name }: linkType, i: number) => (
              <NavItems
                key={`${path + "-" + name}-${i}`}
                path={path}
                name={name}
              />
            ))}
            <div className="flex gap-2">
              <input
                type="date"
                className="bg-stone-800 p-1 rounded-full"
                value={date}
                onChange={handlerInputSearch}
                max={today}
              />
              <button
                className="bg-stone-800 mx-2 p-3 rounded-full hover:bg-stone-700"
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
