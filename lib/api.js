import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export function getHelloData() {
  const { data } = useSWR("/api/hello", fetcher);

  return data;
}
