import { useEffect, useContext } from "react";
import LightModeButton from './partials/LightModeButton';
import DarkModeButton from './partials/DarkModeButton';
import ThemeContext from "../../contexts/ThemeContext";

let ThemeChanger = () => {
   let { systemTheme, theme, setTheme, mounted, setMounted } = useContext(ThemeContext)

   useEffect(() => {
      setMounted(true);
   }, []);

   let setLightMode = () => {
      setTheme('light')
   }
   let setDarkMode = () => {
      setTheme('dark')
   }
   if (!mounted) return null;

   let currentTheme = theme === 'system' ? systemTheme : theme;

   if (currentTheme === 'dark') {
      return (
         <LightModeButton setLightMode={setLightMode} />
      )
   } else {
      return (
         <DarkModeButton setDarkMode={setDarkMode} />
      )
   }
}

export default ThemeChanger;