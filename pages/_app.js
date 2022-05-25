import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import Cursor from '../components/layouts/Cursor'
import { useState, useEffect } from 'react'

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

  return (
    <>
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
