"use client";

import { ReactLenis } from "lenis/react";
import { PropsWithChildren } from "react";

const LenisLayout = ({ children }: PropsWithChildren) => {
   // lenis options for configuration
   const lenisOptions = {
      lerp: 0.5,
      duration: 1,
      smoothTouch: false, //smooth scroll for touch devices
      smooth: true,
   };

   return (
      <ReactLenis root options={lenisOptions}>
         {children}
      </ReactLenis>
   );
};

export default LenisLayout;
