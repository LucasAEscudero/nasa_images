import fetcher from "@/lib/fetcher";
import Image from "next/image";
import { nasaImage } from "@/lib/types";

async function NasaImage({ params: { date } }: { params: { date: string } }) {
  const image: nasaImage = await fetcher(`&date=${date}`);
  return (
    <section>
      <div className="md:flex md:justify-between m-1">
        <h2 className="md:text-start text-center text-xl my-2">
          {image.title}
        </h2>
        <h2 className="md:text-end text-center text-xl my-2">{image.date}</h2>
      </div>
      <div style={{ borderTop: "1px solid white" }}></div>
      <div className="grid md:grid-cols-2 grid-cols-1 m-1 gap-2">
        <Image src={image.url} alt={image.title} width={700} height={500} />
        <div>
          <h2 className="md:text-start text-center text-xl my-2">
            Explanation
          </h2>
          <p className="md:text-start text-center">{image.explanation}</p>
        </div>
      </div>
    </section>
  );
}

export default NasaImage;
