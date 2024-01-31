"use client";
import { nasaImage } from "@/lib/types";
import { useFavoriteStore } from "@/store/favoritesStore";
import ImagesCards from "@/components/imagesCards/ImagesCards";
import Message from "@/components/message/Message";

function Favorites() {
  const favorites: nasaImage[] = useFavoriteStore((state) => state.favorites);

  return (
    <section>
      <h2 className="text-center text-2xl my-2 border-b-[1px] pb-1">
        Favorites
      </h2>
      {!favorites.length ? (
        <Message message="No contienes ninguna imagen en favoritos" />
      ) : (
        <ImagesCards images={favorites} />
      )}
    </section>
  );
}

export default Favorites;
