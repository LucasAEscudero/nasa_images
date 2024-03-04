import fetcher from "@/lib/fetcher";
import Link from "next/link";
import { nasaImage } from "@/lib/types";

import "./TodayImage.css";

export default async function TodayImage() {
  const imageOfTheDay: nasaImage = await fetcher();

  return (
    <section>
      <Link
        href={
          imageOfTheDay.url.includes("youtube")
            ? `/image/${imageOfTheDay.date}`
            : imageOfTheDay.url
        }
      >
        <div
          className="flex items-end border-b-[1px]"
          style={{
            backgroundImage: `url(${imageOfTheDay.url})`,
          }}
          id="frontImage"
        >
          <div className="w-full p-1 px-2 bg-gradient-to-t from-stone-900">
            <h2 className="text-xl md:float-start">
              {imageOfTheDay.title
                ? imageOfTheDay.title
                : "No image found at this time, this is a video"}
            </h2>
            <h2 className="text-xl md:float-end">Today</h2>
          </div>
        </div>
      </Link>
    </section>
  );
}
