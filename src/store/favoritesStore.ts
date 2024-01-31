"use client";

import { create } from "zustand";
import { nasaImage } from "@/lib/types";

export interface favoritesState {
  favorites: nasaImage[];
  addFavorite: (image: nasaImage) => void;
  removeFavorite: (date: string) => void;
  resetFavorites: () => void;
}

export const useFavoriteStore = create<favoritesState>((set) => ({
  favorites: [],
  addFavorite: (image: nasaImage) =>
    set((state) => ({ ...state, favorites: [...state.favorites, image] })),
  removeFavorite: (date: string) =>
    set((state) => ({
      ...state,
      favorites: state.favorites.filter((favorite) => favorite.date !== date),
    })),
  resetFavorites: () =>
    set((state) => ({
      ...state,
      favorites: [],
    })),
}));
