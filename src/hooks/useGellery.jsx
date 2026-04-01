import { fetchData } from "@/utilities/fetchData";
import { useEffect, useState } from "react";


export default function useGallery() {
  const [gellerys, setGellrys] = useState([]);

  useEffect(() => {
    fetchData("gellery.json").then(setGellrys);
  }, []);

  return gellerys;
}