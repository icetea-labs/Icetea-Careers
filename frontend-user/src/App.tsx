import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "./logo.svg";
import "./App.css";
import createRoutes from "./routes";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    nn41424: React.CSSProperties;
    nn41624: React.CSSProperties;
    nn62032: React.CSSProperties;
    nn71218: React.CSSProperties;
    nn71424: React.CSSProperties;
    nn71624: React.CSSProperties;
    nn72432: React.CSSProperties;
    nn73240: React.CSSProperties;
    nn74048: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    nn41424?: React.CSSProperties;
    nn41624?: React.CSSProperties;
    nn62032?: React.CSSProperties;
    nn71218?: React.CSSProperties;
    nn71424?: React.CSSProperties;
    nn71624?: React.CSSProperties;
    nn72432?: React.CSSProperties;
    nn73240?: React.CSSProperties;
    nn74048?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    nn41424: true;
    nn41624: true;
    nn62032: true;
    nn71218: true;
    nn71424: true;
    nn71624: true;
    nn72432: true;
    nn73240: true;
    nn74048: true;
  }
}

function App() {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#EB522F",
      },
    },
    typography: {
      nn41424: {
        font: "normal normal 400 0.875rem/1.5rem Plus Jakarta Sans",
      },
      nn41624: {
        font: "normal normal 400 1rem/1.5rem Plus Jakarta Sans",
      },
      nn62032: {
        font: "normal normal 600 1.25rem/2rem Plus Jakarta Sans",
      },
      nn71218: {
        font: "normal normal 700 0.75rem/1rem Plus Jakarta Sans",
      },
      nn71424: {
        font: "normal normal 700 0.875rem/1.5rem Plus Jakarta Sans",
      },
      nn71624: {
        font: "normal normal 700 1rem/1.5rem Plus Jakarta Sans",
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
