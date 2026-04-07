import { Outlet } from "react-router";
import { Aside } from "../components/aside";
import { NavBar } from "../components/navbar";
import { LayoutDivStyle, LayoutNavOutlet } from "./style";

export function LayoutStyle() {
  return (
    <>
      <LayoutDivStyle>
        <Aside />
        <LayoutNavOutlet style={{ flex: 1 }}>
          <NavBar />
          <Outlet />
        </LayoutNavOutlet>
      </LayoutDivStyle>
    </>
  );
}
