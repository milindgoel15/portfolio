import { SetStateAction, createContext } from "react";
import ThemeInterface from "../interfaces/ThemeInterface";

let ThemeContext = createContext<ThemeInterface>({
   theme: "system",
   systemTheme: undefined,
   setTheme: (theme: string) => { },
   mounted: false,
   setMounted: (value: SetStateAction<boolean>) => { }
})

export default ThemeContext;