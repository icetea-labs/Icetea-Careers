import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import createRoutes from "./routes";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    nn41424: React.CSSProperties;
    nn61216: React.CSSProperties;
    nn61824: React.CSSProperties;
    nn62028: React.CSSProperties;
    nn63248: React.CSSProperties;
    nn71420: React.CSSProperties;
    nn72432: React.CSSProperties;
    nn73240: React.CSSProperties;
    nn74048: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    nn41424?: React.CSSProperties;
    nn61216?: React.CSSProperties;
    nn61824?: React.CSSProperties;
    nn62028?: React.CSSProperties;
    nn63248?: React.CSSProperties;
    nn71420?: React.CSSProperties;
    nn72432?: React.CSSProperties;
    nn73240?: React.CSSProperties;
    nn74048?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    nn41424: true;
    nn61216: true;
    nn61824: true;
    nn62028: true;
    nn63248: true;
    nn71420: true;
    nn72432: true;
    nn73240: true;
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
      nn41424: {
        font: "normal normal 400 14px/24px Plus Jakarta Sans",
      },
      nn61216: {
        font: "normal normal 600 12px/16px Plus Jakarta Sans",
      },
      nn61824: {
        font: "normal normal 600 18px/24px Plus Jakarta Sans",
      },
      nn62028: {
        font: "normal normal 600 20px/28px Plus Jakarta Sans",
      },
      nn63248: {
        font: "normal normal 600 32px/48px Plus Jakarta Sans",
      },
      nn71420: {
        font: "normal normal 700 14px/20px Plus Jakarta Sans",
      },
      nn72432: {
        font: "normal normal 700 1.5rem/2rem Plus Jakarta Sans",
      },
      nn73240: {
        font: "normal normal 700 2rem/2.5rem Plus Jakarta Sans",
      },
      nn74048: {
        font: "normal normal 700 2.5rem/3rem Plus Jakarta Sans",
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
