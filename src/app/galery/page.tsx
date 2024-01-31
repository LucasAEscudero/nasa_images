"use client";
import { nasaImage } from "@/lib/types";
import { format, subDays } from "date-fns";
import fetcher from "@/lib/fetcher";
import ImagesCards from "@/components/imagesCards/ImagesCards";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Spinner from "@/components/spinner/Spinner";

let daysQuantity = 11;

function Galery() {
  const { ref, inView } = useInView();
  const [images, setImages] = useState<nasaImage[]>([]);

  useEffect(() => {
    if (inView) {
      const startDate = format(new Date(), "yyyy-MM-dd");
      const endDate = format(subDays(new Date(), daysQuantity), "yyyy-MM-dd");

      fetcher(`&start_date=${endDate}&end_date=${startDate}`)
        .then((res) => {
          setImages([...res.reverse()]);
        })
        .catch((error) => console.error(error));

      daysQuantity += 11;
    }
  }, [inView, images]);

  return (
    <section>
      <h2 className="text-center text-2xl my-2 border-b-[1px] pb-1">Galery</h2>
      <ImagesCards images={images} />
      {/* <LoadMore /> */}
      <div ref={ref}>
        <Spinner />
      </div>
    </section>
  );
}

export default Galery;
