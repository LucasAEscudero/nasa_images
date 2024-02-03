"use client";
import { useEffect, useState } from "react";
import { useFavoriteStore } from "@/store/favoritesStore";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "../motionDiv/MotionDiv";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

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
    if (favorites.length && date) {
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
          <button
            type="button"
            onClick={handlerFavorite}
            className="absolute m-1"
          >
            <FaStar size={25} />
          </button>
        ) : (
          <button type="button" onClick={handlerFavorite} className="absolute">
            <CiStar size={31} />
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
