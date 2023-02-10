import Footer from '../components/layouts/sections/Footer'
import Header from '../components/layouts/sections/Header'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import React, { useState, useEffect } from 'react'
import Cloudflare from '../components/common/Cloudflare'
import HeadDetails from '../components/common/headDetails'
// import SnowFlakes from '../components/common/SnowFlakes'
import Cursor from '../components/common/Cursor'
// import DesktopContext from '../contexts/DesktopContext'
import localFont from '@next/font/local'

const raisonne = localFont({
  src: [{ path: '../public/fonts/raisonne.woff2' }, { path: '../public/fonts/raisonne.woff' }],
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-raisonne'
})

function MyApp({ Component, pageProps }) {
  let [isDesktopMode, setDesktopMode] =  useState(false);
  let desktop = typeof window == 'object' && window.innerWidth > 1280;

  useEffect(() => {
    const updateComp = () => {
      setDesktopMode(desktop)
    }

    updateComp()
    window.addEventListener('resize', updateComp)
    return () => {
      window.removeEventListener('resize', updateComp)
    }
  }, [])

  useEffect(() => {
    console.log("%cMade with ❤︎️ by Milind Goel", "background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;")
  }, [])

  // let renderDesktopChanger = <DesktopContext.Provider value={{ isDesktopMode }}>
  //   <SnowFlakes />
  // </DesktopContext.Provider>

  return (
    <>
    <HeadDetails />
      <main className={`${raisonne.variable} font-raisonne`}>
        <Cloudflare />
        {/* {renderDesktopChanger} */}
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
