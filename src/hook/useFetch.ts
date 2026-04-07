import { useEffect, useState } from "react";

type State<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export function useFetch<T>(url: string) {
  const [state, setState] = useState<State<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;


     async function fetchData() {
          setState(prev => ({ ...prev, isLoading: true, error: null })) // resetar o que vem da url

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }

        const json: T = await response.json();

        if (!cancelled) {
          setState({
            data: json,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        if (!cancelled) {
          setState({
            data: null,
            isLoading: false,
            error:
              error instanceof Error ? error.message : "Erro ao consumir API",
          });
        }
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return state
}
