"use client";
import { useEffect, useState } from "react";
import { useFavoriteStore } from "@/store/favoritesStore";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "../motionDiv/MotionDiv";

import "./ImageCard.css";

interface Props {
  url: string;
  date: string;
  title: string;
  explanation: string;
  i: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ImageCard({ url, date, title, explanation, i }: Props) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();

  const handlerFavorite = () => {
    if (favorite) {
      setFavorite(false);
      removeFavorite(date);
    } else {
      setFavorite(true);
      addFavorite({
        url,
        title,
        date,
        explanation,
      });
    }
  };

  useEffect(() => {
    if (favorites.length) {
      favorites.forEach((fav) => {
        if (fav.date === date) setFavorite(true);
      });
    }
  }, [favorites]);

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: i * 0.1, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="m-4 bg-stone-900 rounded"
      id="container"
    >
      <div className="star">
        {favorite ? (
          <button type="button" onClick={handlerFavorite} className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mt-1 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button type="button" onClick={handlerFavorite} className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-1 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </button>
        )}
      </div>
      {url.includes("www.youtube.com") ? (
        <Link href={url} target="_blank">
          <h2 className="mt-5 mb-2 text-center text-blue-700">
            Esto es un video, haga click para verlo!
          </h2>
          <h3 className="m-1">{title}</h3>
        </Link>
      ) : (
        <Link href={`/image/${date}`}>
          <Image
            src={url}
            alt="No contiene una imagen, es un video"
            width={400}
            height={300}
            className="image"
          />

          <h3 className="m-1">{title}</h3>
        </Link>
      )}
    </MotionDiv>
  );
}
