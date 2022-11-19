import Head from 'next/head';
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link';
import Burger from "@animated-burgers/burger-rotate"
import '@animated-burgers/burger-rotate/dist/styles.css'

import HeaderData from '../../../utils/HeaderData';
import NavLinks from '../partials/NavLinks';
import Logo from "../../elements/Logo";
import ThemeContext from '../../../contexts/ThemeContext';
import ThemeChanger from '../ThemeChanger';

let Header = () => {
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
         <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="Milind Goel, milindgoel15, Web Developer" />

            {/* open graph / facebook meta tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://milindgoel.vercel.app/" />
            <meta property="og:title" content="Milind Goel" />
            <meta property="og:description" content="A Web Developer, based in India building astonishing web experiences." />
            <meta property="og:image" content="https://github.com/milindgoel15/portfolio/blob/main/public/favicons/apple-touch-icon.png" />

            {/* twitter meta tags */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://milindgoel.vercel.app/" />
            <meta property="twitter:title" content="Milind Goel" />
            <meta property="twitter:description" content="A Web Developer, based in India building astonishing web experiences." />
            <meta property="twitter:image" content="https://github.com/milindgoel15/portfolio/blob/main/public/favicons/apple-touch-icon.png" />

            {/* google site verification */}
            <meta name="google-site-verification" content="2tG9JnOT3BhG1wK6wvHuYbfJqzXu1D3aosqBoAMYHIA" />

            {/* favicons */}
            <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
         </Head>

         <header className="max-w-7xl mx-auto px-8 md:mx-8 flex xl:mx-auto h-24 items-center justify-between">
            <Link
               href="/"
               onClick={() => setNavBarOpen(false)}
               className='z-10 cursor-pointer'>
               <Logo alt="Logo" />
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
                           target={props.target}
                        />
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