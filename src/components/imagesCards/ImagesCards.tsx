"use client";
import ImageCard from "../imageCard/ImageCard";
import { nasaImage } from "@/lib/types";

interface Props {
  images: nasaImage[];
}

export default function ImagesCards({ images }: Props) {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-start">
        {images.map(
          ({ url, title, date, explanation }: nasaImage, i: number) => (
            <ImageCard
              key={`${title}-${i}`}
              url={url}
              title={title}
              date={date}
              explanation={explanation}
              i={i}
            />
          )
        )}
      </div>
    </>
  );
}
