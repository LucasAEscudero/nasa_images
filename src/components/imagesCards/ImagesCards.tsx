import fetcher from "@/lib/fetcher";
import Image from "next/image";
import { format, subDays } from "date-fns";

import { nasaImage } from "@/lib/types";

export default async function ImagesCards() {
  const images: nasaImage[] = await fetcher(
    `&start_date=${format(
      subDays(new Date(), 10),
      "yyyy-MM-dd"
    )}&end_date=${format(new Date(), "yyyy-MM-dd")}`
  );

  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      <h2>Imagenes de los ultimos 10 dias</h2>
      {images?.map(({ url, title }: nasaImage) => (
        <article key={title}>
          <Image src={url} alt={title} width={400} height={500} />
        </article>
      ))}
    </section>
  );
}
