"use client";
import Image from "next/image";
import fetcher from "@/lib/fetcher";
import { nasaImage } from "@/lib/types";

function FrontImage({ url, title, date, explanation }: nasaImage) {
  // const imageOfTheDay: nasaImage = fetcher();

  return (
    <div>
      <Image src={url} alt={title} width={500} height={300} />
      <div>
        <div>
          <h2>{title}</h2>
          <p>{explanation}</p>
        </div>
        <h2>{date}</h2>
      </div>
    </div>
  );
}

export default FrontImage;
