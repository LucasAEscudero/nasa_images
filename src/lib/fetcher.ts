"use server";
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const fetcher = async (query?: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${process.env.API_KEY}${query?.length ? query : ""}`
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default fetcher;
