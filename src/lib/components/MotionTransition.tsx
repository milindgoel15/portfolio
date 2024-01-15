import { PropsWithChildren } from "react";
import { AppMotionDiv } from "./motion/AppMotion";

const MotionTransition = ({ children }: PropsWithChildren) => {
   return (
      <>
         <div>
            <AppMotionDiv className="absolute top-0 left-0 w-full h-screen bg-primary origin-bottom z-50" initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
            <AppMotionDiv className="absolute top-0 left-0 w-full h-screen bg-primary origin-top z-50" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
            {children}
         </div>
      </>
   )
}

export default MotionTransition;