import { useState } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link';
import Burger from "@animated-burgers/burger-rotate"
import '@animated-burgers/burger-rotate/dist/styles.css'
import ThemeContext from "../contexts/ThemeContext";
import ThemeChanger from "./ThemeChanger";
import Logo from "../Icons/Logo";
import HeaderData from "../utils/HeaderData";
import NavLinks from "../partials/NavLinks";


let Header = (): JSX.Element => {
   let [isNavBarOpen, setNavBarOpen] = useState(false);
   let { systemTheme, theme, setTheme } = useTheme();
   let [mounted, setMounted] = useState(false);

   let renderThemeChanger = (
      <ThemeContext.Provider value={{ systemTheme, theme, setTheme, mounted, setMounted }}>
         <ThemeChanger />
      </ThemeContext.Provider>
   )

   return (
      <>
         <header className="max-w-7xl mx-auto px-8 md:mx-8 flex xl:mx-auto h-24 items-center justify-between">
            <Link
               href="/"
               onClick={() => setNavBarOpen(false)}
               className='z-10 cursor-pointer'>
               <Logo aria-label="Logo" />
            </Link>

            <nav className='flex gap-6'>
               <div className='flex justify-center gap-5 items-center'>
                  <span className='flex items-center z-10 '>
                     {renderThemeChanger}
                  </span>
                  <span onClick={() => setNavBarOpen(!isNavBarOpen)} className="md:hidden transition-all duration-200 z-10 focus:outline-none">
                     <Burger isOpen={isNavBarOpen ? true : false} style={{ fontSize: '10px' }} Component="button" type="button" />
                  </span>
               </div>

               <ul onClick={() => setNavBarOpen(false)} className={`md:flex md:items-center z-[1] text-black dark:text-white text-center md:z-auto md:static absolute w-full left-0 md:w-auto dark:bg-secondary md:dark:bg-transparent backdrop-blur md:backdrop-blur-none md:py-0 space-x-4 transition-all ease-in duration-400 ${isNavBarOpen ? 'top-[95px]' : 'top-[-400px]'} `}>
                  {
                     HeaderData.map(props => (
                        <NavLinks
                           key={props.id}
                           title={props.title}
                           link={props.link}
                           target={props.target} id={props.id} />
                     ))
                  }
               </ul>
            </nav>
            <div className="hidden md:block w-96 h-96 -ml-56 pointer-events-none absolute  border-2 border-gray-600 rounded-full"></div>
         </header>
      </>
   );
}

export default Header;