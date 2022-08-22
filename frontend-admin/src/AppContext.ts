import { createContext } from "react";

export type AppContextType = {
  username?: string;
  loginError?: string;
  logout?: () => void;
};

export const AppContext = createContext<AppContextType>({});
