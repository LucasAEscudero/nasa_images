"use client";
import { useEffect, useState } from "react";
import { useFavoriteStore } from "@/store/favoritesStore";
import Image from "next/image";
import Link from "next/link";
import { MotionArticle } from "../motionArticle/MotionArticle";
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
      localStorage.setItem(
        "localNasaImages",
        JSON.stringify(favorites.filter((favorite) => favorite.date !== date))
      );
    } else {
      setFavorite(true);
      addFavorite({
        url,
        title,
        date,
        explanation,
      });
      localStorage.setItem(
        "localNasaImages",
        JSON.stringify([...favorites, { url, date, title, explanation }])
      );
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
    <MotionArticle
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: i * 0.1, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="m-4 bg-stone-900 rounded hover:scale-105"
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
      {url.includes("youtube.com") ? (
        <Link href={url} target="_blank" className="">
          <h2 className="mt-3 mb-4 text-center text-blue-700">
            Esto es un video, haga click para verlo!
          </h2>
          <h3 className="mx-2 mb-1">{title}</h3>
        </Link>
      ) : (
        <Link href={`/image/${date}`}>
          <Image
            src={url}
            alt={title + " image"}
            width={400}
            height={300}
            className="image"
          />

          <h3 className="m-1">{title}</h3>
        </Link>
      )}
    </MotionArticle>
  );
}
