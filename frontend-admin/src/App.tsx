import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import createRoutes from "./routes";

declare module "@mui/material/styles" {
  interface TypographyVariants {}

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {}
}

function App() {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#00c7f4",
      },
    },
    typography: {},
  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>{createRoutes()}</ThemeProvider>
    </>
  );
}

export default App;
