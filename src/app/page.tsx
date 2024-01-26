import fetcher from "@/lib/fetcher";
import { nasaImage } from "@/lib/types";

import FrontImage from "@/components/frontImage/FrontImage";
import ImagesCards from "@/components/imagesCards/ImagesCards";

export default async function Home() {
  const imageOfTheDay: nasaImage = await fetcher();

  return (
    <>
      <FrontImage
        url={imageOfTheDay.url}
        title={imageOfTheDay.title}
        date={imageOfTheDay.date}
        explanation={imageOfTheDay.explanation}
      />
      <ImagesCards />
    </>
  );
}
