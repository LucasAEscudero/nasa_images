import Image from "next/image";
import fetcher from "@/lib/fetcher";
import { nasaImage } from "@/lib/types";

async function FrontImage({ today }: { today: string }) {
  const imageOfTheDay: nasaImage = await fetcher(`&date=${today}`);

  return (
    <div style={{ borderBottom: "1px solid white" }}>
      <div className="flex justify-center relative">
        <Image
          src={imageOfTheDay.url}
          alt={imageOfTheDay.title}
          width={350}
          height={200}
          // fill
          className="relative"
        />
      </div>
      <div className="flex justify-between p-1 mx-1">
        <h2 className="text-xl">{imageOfTheDay.title}</h2>
        <h2 className="text-xl">Hoy</h2>
      </div>
    </div>
  );
}

export default FrontImage;
