"use client";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <RingLoader color="#fff" loading />
    </div>
  );
}
