import { Metadata } from 'next';

import localFont from "next/font/local";
import "./globals.scss";

import Footer from '@/lib/common/Footer';
import GlobalProvider from '@/lib/providers/GlobalProvider';
import { PropsWithChildren } from 'react';

const raisonne = localFont({
   src: [
      { path: "../../public/fonts/raisonne.woff2" },
      { path: "../../public/fonts/raisonne.woff" },
   ],
   display: "swap",
   weight: "400",
   style: "normal",
   variable: "--font-raisonne",
   fallback: ["system-ui", "sans-serif"],
});


export const metadata: Metadata = {
   title: "Milind Goel",
   description: "Web and Flutter Developer | Crafting Innovative Digital Solutions | Explore My Portfolio and Skills",
}

export default function RootLayout({
   children,
}: PropsWithChildren) {
   return (
      <html lang="en" className={`${raisonne.variable}`}>
         <body className="font-raisonne select-none">
            <GlobalProvider>
               {children}
               <Footer />
            </GlobalProvider>
         </body>
      </html>
   )
}