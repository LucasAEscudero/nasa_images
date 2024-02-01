"use client";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  path: string;
  name: string;
}

export default function NavItems({ path, name }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li
      className={`hover:bg-stone-800 p-2 rounded hover:cursor-pointer text-center ${
        pathname === path && "bg-stone-800"
      }`}
      onClick={() => router.push(path)}
    >
      <span
        className={`p-1 text-center ${pathname === path && "border-b-[1px]"}`}
      >
        {name}
      </span>
    </li>
  );
}
