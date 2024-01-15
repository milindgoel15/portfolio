"use client";

import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import BlobAnimation from "../blobanimation/BlobAnimation";
import Cursor from "../common/Cursor";
import DesktopModeProvider from "../hooks/useDesktopMode";
import SnowModeProvider from "../hooks/useSnowMode";
import NextThemeProvider from "./NextThemeProvider";

const GlobalProvider = ({ children }: PropsWithChildren) => {
   return (
      <>
         <DesktopModeProvider>
            <NextThemeProvider>
               {/* <MotionProvider> */}
               <SnowModeProvider>
                  <Cursor />
                  {/* <MotionTransition /> */}
                  <BlobAnimation />
                  {children}
                  <Toaster />
               </SnowModeProvider>
               {/* </MotionProvider> */}
            </NextThemeProvider>
         </DesktopModeProvider>
      </>
   )
}

export default GlobalProvider;