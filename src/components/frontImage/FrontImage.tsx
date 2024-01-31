import Image from "next/image";
import fetcher from "@/lib/fetcher";
import { nasaImage } from "@/lib/types";

import "./FrontImage.css";

async function FrontImage({ today }: { today: string }) {
  const imageOfTheDay: nasaImage = await fetcher(`&date=${today}`);

  return (
    <div
      className="flex items-end border-b-[1px]"
      style={{
        backgroundImage: `url(${imageOfTheDay.url})`,
      }}
      id="frontImage"
    >
      {/* <div className="flex justify-center relative">
        <Image
          src={imageOfTheDay.url}
          alt={imageOfTheDay.title}
          width={350}
          height={200}
          // fill
          className="relative"
        />
      </div> */}
      <div className="w-full p-1 mx-1">
        <h2 className="text-xl float-start">{imageOfTheDay.title}</h2>
        <h2 className="text-xl float-end">Today</h2>
      </div>
    </div>
  );
}

export default FrontImage;
