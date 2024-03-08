"use clent"

import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
   const [mode, setMode] = useState("dark");


   const toggle = () => {
    setMode()
   }
}