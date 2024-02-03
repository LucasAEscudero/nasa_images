import fetcher from "@/lib/fetcher";
import Link from "next/link";
import { format } from "date-fns";
import { nasaImage } from "@/lib/types";

import "./TodayImage.css";

const fetchTodayImage = async () => {
  const today: string = format(new Date(), "yyyy-MM-dd");

  const imageOfTheDay: nasaImage = await fetcher(`&date=${today}`);

  return imageOfTheDay;
};

export default async function TodayImage() {
  const imageOfTheDay: nasaImage = await fetchTodayImage();

  return (
    <section>
      <Link href={`/image/${imageOfTheDay.date}`}>
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
          <div className="w-full p-1 px-2 bg-gradient-to-t from-stone-900">
            <h2 className="text-xl md:float-start">
              {imageOfTheDay.title || "No image found at this time"}
            </h2>
            <h2 className="text-xl md:float-end">Today</h2>
          </div>
        </div>
      </Link>
    </section>
  );
}
