import { createContext, useContext, useState } from "react";
import { url } from "../env";
import { useFetch } from "../hook/useFetch";

interface DepartamentProviderProps {
  children: React.ReactNode;
}

type Departament = { id: number; name: string; total: number };

type DepartamentContextType = {
  data: Departament[] | null
  selected: Departament | undefined;
  setSelected: (id: number) => void;
  isLoading: boolean
  error: string | null
};


const DepartamentContext = createContext({} as DepartamentContextType);

export function DepartamentProvider({ children }: DepartamentProviderProps) {
     const [selectId, setSelectId] = useState<number>(1)
     const { data, error, isLoading} = useFetch<Departament[]>(`${url}/departamentos`)

     const selected = data?.find((item) => item.id === selectId)

     return (
      <DepartamentContext value={{data, selected, setSelected: setSelectId, isLoading, error}}>
        {children}
      </DepartamentContext>
     )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDepartament() {
  return useContext(DepartamentContext)
}
