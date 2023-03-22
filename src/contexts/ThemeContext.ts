import { SetStateAction, createContext } from "react";
import ThemeInterface from "../interfaces/ThemeInterface";

let ThemeContext = createContext<ThemeInterface>({
   theme: "system",
   systemTheme: undefined,
   setTheme: function (theme: string): void {
      console.log(theme);

   },
   mounted: false,
   setMounted: function (value: SetStateAction<boolean>): void {
      console.log(value);

   }
})

export default ThemeContext;