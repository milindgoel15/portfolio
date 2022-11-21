import Footer from '../components/layouts/sections/Footer'
import Header from '../components/layouts/sections/Header'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import Cursor from '../components/layouts/Cursor'
import React, { useState, useEffect } from 'react'
import Cloudflare from '../components/layouts/Cloudflare'
import SnowFlakes from '../components/layouts/SnowFlakes'
import DesktopContext from '../contexts/DesktopContext'
import localFont from '@next/font/local'

const raisonne = localFont({
  src: [{ path: '../public/fonts/raisonne.woff2' }, { path: '../public/fonts/raisonne.woff' }],
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-raisonne'
})

function MyApp({ Component, pageProps }) {
  let desktop;
  if (typeof window == 'object') {
    desktop = window.innerWidth > 1280;
  }
  let [isDesktopMode, setDesktopMode] = useState(desktop);
  let updateComp = () => {
    setDesktopMode(desktop)
  }
  useEffect(() => {
    window.addEventListener("resize", updateComp);
    return () => window.removeEventListener("resize", updateComp);
  });

  let renderDesktopChanger = <DesktopContext.Provider value={{ isDesktopMode }}>
    <SnowFlakes />
  </DesktopContext.Provider>

  useEffect(() => {
    console.log("%cMade with ❤︎️ by Milind Goel", "background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;")
  }, [])

  return (
    <>
      <main className={`${raisonne.variable} font-raisonne`}>
        <Cloudflare />
        {renderDesktopChanger}
        <ThemeProvider attribute='class'>
          {isDesktopMode && <Cursor />}
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </main>
    </>
  )
}

export default MyApp
