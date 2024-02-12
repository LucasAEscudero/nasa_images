"use client";
import { nasaImage } from "@/lib/types";
import { useFavoriteStore } from "@/store/favoritesStore";
import { useEffect } from "react";

import ImagesCards from "@/components/imagesCards/ImagesCards";
import Message from "@/components/message/Message";

function Favorites() {
  const { favorites, chargueFavorites } = useFavoriteStore((state) => state);

  useEffect(() => {
    const localImages: nasaImage[] | null = JSON.parse(
      localStorage.getItem("localNasaImages") || '"'
    );

    if (localImages) chargueFavorites(localImages);
  }, []);

  return (
    <section>
      <h2 className="text-center text-2xl my-2 border-b-[1px] pb-1">
        Favorites
      </h2>
      {!favorites.length ? (
        <Message message="Does not contain any images in favorites" />
      ) : (
        <ImagesCards images={favorites} />
      )}
    </section>
  );
}

export default Favorites;
