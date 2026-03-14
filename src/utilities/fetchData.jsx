export const fetchData = async (file) => {
  const res = await fetch(`/data/${file}`);
  return res.json();
};