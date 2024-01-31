"use client";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex bg-stone-900 h-12 px-6 items-center rounded-b">
        <h2 className="hover:cursor-default">NASA Images</h2>

        <ul className="flex space-x-5 pl-5">
          <li
            className={`hover:bg-stone-800 p-2 rounded hover:cursor-pointer ${
              path === "/" ? "bg-stone-800" : ""
            }`}
            onClick={() => router.push("/")}
          >
            Home
          </li>

          <li
            className={`hover:bg-stone-800 p-2 rounded hover:cursor-pointer ${
              path === "/galery" ? "bg-stone-800" : ""
            }`}
            onClick={() => router.push("/galery")}
          >
            Galery
          </li>
          <li
            className={`hover:bg-stone-800 p-2 rounded hover:cursor-pointer ${
              path === "/favorites" ? "bg-stone-800" : ""
            }`}
            onClick={() => router.push("/favorites")}
          >
            Favorites
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
