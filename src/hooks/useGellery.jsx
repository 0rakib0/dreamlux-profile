import { fetchData } from "@/utilities/fetchData";
import { useEffect, useState } from "react";


export default function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData("gellery.json").then(setProjects);
  }, []);

  return projects;
}