import { RouterProvider } from "react-router";
import { GlobalStyle } from "./styles/global";
import { routes } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { DepartamentProvider } from "./context/DepartamentContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DepartamentProvider>
          <GlobalStyle />
          <RouterProvider router={routes} />
        </DepartamentProvider>
      </ThemeProvider>
    </>
  );
}
