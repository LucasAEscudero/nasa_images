import fetcher from "@/lib/fetcher";
import { nasaImage } from "@/lib/types";
import { format, subDays } from "date-fns";

import FrontImage from "@/components/frontImage/FrontImage";
import ImagesCards from "@/components/imagesCards/ImagesCards";

export default async function Home() {
  const today = format(new Date(), "yyyy-MM-dd");
  const yesterday = format(subDays(new Date(), 1), "yyyy-MM-dd");
  const twelveDaysbefore = format(subDays(new Date(), 12), "yyyy-MM-dd");

  const images: nasaImage[] = await (
    await fetcher(`&start_date=${twelveDaysbefore}&end_date=${yesterday}`)
  ).reverse();

  return (
    <div>
      <FrontImage today={today} />
      <section>
        <h2 className="text-start text-2xl my-2">Ultimas 12 imagenes</h2>
        <ImagesCards images={images} />
      </section>
    </div>
  );
}
