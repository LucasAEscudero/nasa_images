"use client";
import { nasaImage } from "@/lib/types";
import { useFavoriteStore } from "@/store/favoritesStore";
import ImagesCards from "@/components/imagesCards/ImagesCards";
import Message from "@/components/message/Message";

function Favorites() {
  const favorites: nasaImage[] = useFavoriteStore((state) => state.favorites);

  if (!favorites.length)
    return (
      <Message
        title="Favoritos"
        message="No contienes ninguna imagen en favoritos"
      />
    );

  return (
    <section>
      <h2 className="text-center text-2xl my-2">Favorites</h2>
      <div style={{ borderTop: "1px solid white" }}></div>
      <ImagesCards images={favorites} />
    </section>
  );
}

export default Favorites;
