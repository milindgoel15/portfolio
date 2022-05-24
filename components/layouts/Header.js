import Head from 'next/head';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import HeaderData from '../../utils/HeaderData';
import NavLinks from './partials/NavLinks';
import Hamburger from "../elements/Hamburger";
import Cross from '../elements/Cross';
import Logo from "../elements/Logo";
import Link from 'next/link';
import Sun from '../elements/Sun';
import Moon from '../elements/Moon';

let Header = () => {
   let [isNavBarOpen, setNavBarOpen] = useState(false);
   let { systemTheme, theme, setTheme } = useTheme();
   let [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   let renderThemeChanger = () => {
      if (!mounted) return null;

      let currentTheme = theme === 'system' ? systemTheme : theme;

      if (currentTheme === 'dark') {
         return (
            <button aria-label='Set Light Mode' onClick={() => setTheme('light')} >
               <Sun />
            </button>
         )
      } else {
         return (
            <button aria-label='Set Dark Mode' onClick={() => setTheme('dark')}>
               <Moon />
            </button>
         )
      }
   }

   return (
      <>
         <Head>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="Milind Goel, milindgoel15, Web Developer" />
            <meta property="og:title" content="Milind Goel" />
            <meta property="og:description" content="A Web Developer, based in India building astonishing web experiences." />
            <meta property="og:url" content="https://milindgoel15.github.io" />
            <meta property="og:site_name" content="milindgoel15.github.io" />
            <meta name="google-site-verification" content="WYAQh2p6n6VJfRhtdEE9Zmd9mWU8iDs_gmCz3BjrQ_o" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Milind Goel" />
            <meta name="twitter:description" content="A Front-End Web Developer, based in India building astonishing web experiences." />
            <meta name="twitter:image" content="https://github.com/milindgoel15/milindgoel15.github.io/blob/main/favicons/apple-touch-icon.png" />

            <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
         </Head>

         <header className="max-w-7xl mx-auto px-8 md:mx-8 md:flex xl:mx-auto md:items-center md:justify-between">
            <nav className="flex justify-between items-center h-24">
               <Link href="/">
                  <a className='z-10 cursor-pointer'>
                     <Logo alt="Logo" />
                  </a>
               </Link>

               <div className='flex justify-center gap-5 items-center'>
                  <span className='flex items-center z-10 md:hidden'>
                     {renderThemeChanger()}
                  </span>
                  <button onClick={() => setNavBarOpen(!isNavBarOpen)} className="md:hidden transition-all duration-200 z-10 focus:outline-none">
                     {isNavBarOpen ? <Cross /> : <Hamburger />}
                  </button>
               </div>
            </nav>

            <nav className='flex gap-6'>
               <span className='hidden md:flex items-center'>
                  {renderThemeChanger()}
               </span>
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
   )
}

export default Header;