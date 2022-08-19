import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import createRoutes from "./routes";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    nn42032: React.CSSProperties;
    nn62032: React.CSSProperties;
    nn72032: React.CSSProperties;
    nn74048: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    nn42032?: React.CSSProperties;
    nn62032?: React.CSSProperties;
    nn72032?: React.CSSProperties;
    nn74048?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    nn42032: true;
    nn62032: true;
    nn72032: true;
    nn74048: true;
  }
}

function App() {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#00c7f4",
      },
    },
    typography: {
      nn42032: {
        font: "normal normal 400 14px/24px Plus Jakarta Sans",
      },
      nn62032: {
        font: "normal normal 600 12px/16px Plus Jakarta Sans",
      },
      nn72032: {
        font: "normal normal 700 14px/20px Plus Jakarta Sans",
      },
      nn74048: {
        font: "normal normal 700 1.5rem/2rem Plus Jakarta Sans",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>{createRoutes()}</ThemeProvider>
    </>
  );
}

export default App;
