import {
  DepartamentsDiv,
  DepartamentsDivButton,
  DepartamentsItem,
} from "./style";
import { useDepartament } from "../../context/DepartamentContext";

export function Departaments() {
  const { isLoading, error, data, selected, setSelected } = useDepartament();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;

  return (
    <DepartamentsDiv>
      <DepartamentsDivButton>
        {data?.map((item) => (
          <DepartamentsItem
            key={item.id}
            $active={selected?.id === item.id}
            disabled={selected?.id === item.id}
            onClick={() => setSelected(item.id)} // estava faltando chamar a função
          >
            {item.name}
          </DepartamentsItem>
        ))}
      </DepartamentsDivButton>

      <p>
        Showing{" "}
        <span>{data?.find((find) => find.id === selected?.id)?.total}</span>
        {" "} employees
      </p>
    </DepartamentsDiv>
  );
}
