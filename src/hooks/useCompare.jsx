import { fetchData } from "@/utilities/fetchData";
import { useEffect, useState } from "react";


export default function useCompare() {
  const [compareData, setCompareData] = useState([]);

  useEffect(() => {
    fetchData("compare.json").then(setCompareData);
  }, []);

  return compareData;
}