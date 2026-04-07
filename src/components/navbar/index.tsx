import { BellDot, ListFilter, Search } from "lucide-react";
import { NavBarFilterNotification, NavBarSearch, NavBarStyle } from "./style";
import { useEffect } from "react";
import { useSearch } from "../../hook/useSearch";

export function NavBar() {
  const { handleSearch, search } = useSearch();

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <NavBarStyle>
      <NavBarSearch>
        <Search size="1.25rem" />
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search name, role, or department..."
          type="text"
        />
      </NavBarSearch>

      <NavBarFilterNotification>
        <ListFilter />
        <BellDot />
      </NavBarFilterNotification>

      {/* */}
    </NavBarStyle>
  );
}
