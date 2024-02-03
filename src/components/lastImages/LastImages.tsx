import { format, subDays } from "date-fns";
import ImagesCards from "../imagesCards/ImagesCards";
import { nasaImage } from "@/lib/types";
import fetcher from "@/lib/fetcher";
import { revalidatePath } from "next/cache";

const fetchLastImages = async (quantity: number) => {
  const yesterday = format(subDays(new Date(), 1), "yyyy-MM-dd");
  const quantityDaysbefore = format(
    subDays(new Date(), quantity),
    "yyyy-MM-dd"
  );

  const images: nasaImage[] = await (
    await fetcher(`&start_date=${quantityDaysbefore}&end_date=${yesterday}`)
  ).reverse();

  revalidatePath("/");

  return images;
};

export default async function LastImages({ quantity }: { quantity: number }) {
  const images: nasaImage[] = await fetchLastImages(quantity);

  return (
    <section>
      <h2 className="text-start text-2xl my-2 ml-2">
        Last {images.length} images
      </h2>
      <ImagesCards images={images} />
    </section>
  );
}
