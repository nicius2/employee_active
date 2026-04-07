import { useEffect, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log(search);
  }, [search]);

  return { search, handleSearch };
}
