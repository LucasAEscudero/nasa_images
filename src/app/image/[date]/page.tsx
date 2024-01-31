import fetcher from "@/lib/fetcher";
import Image from "next/image";
import { nasaImage } from "@/lib/types";

async function NasaImage({ params: { date } }: { params: { date: string } }) {
  const image: nasaImage = await fetcher(`&date=${date}`);
  return (
    <section>
      <div>
        <h2>{image.title}</h2>
        <h2>{image.date}</h2>
      </div>
      <div>
        <Image src={image.url} alt={image.title} width={700} height={500} />
      </div>
      <p>{image.explanation}</p>
    </section>
  );
}

export default NasaImage;
