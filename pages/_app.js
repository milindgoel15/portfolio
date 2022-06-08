import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import Cursor from '../components/layouts/Cursor'
import { useState, useEffect } from 'react'
import Cloudflare from '../components/layouts/Cloudflare'

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
  useEffect(() => {
    console.log("%cMade with ❤︎️ by Milind Goel", "background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;")
  }, [])

  return (
    <>
      <Cloudflare />
      <ThemeProvider attribute='class'>
        {isDesktopMode && <Cursor />}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
