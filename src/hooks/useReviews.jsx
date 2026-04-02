import { fetchData } from "@/utilities/fetchData";
import { useEffect, useState } from "react";


export default function useReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchData("reviews.json").then(setReviews);
  }, []);

  return reviews;
}