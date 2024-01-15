// "use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const MotionProvider = ({ children }: PropsWithChildren) => {
   // const router = useRouter();
   const pathname = usePathname();

   return (
      <>
         <AnimatePresence mode="wait">
            <div key={pathname}>

               {children}
            </div>
         </AnimatePresence>
      </>
   );
};

export default MotionProvider;
