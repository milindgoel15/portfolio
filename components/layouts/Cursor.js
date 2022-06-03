import dynamic from 'next/dynamic';
import { useTheme } from "next-themes";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
   ssr: false
});

let Cursor = () => {
   let { systemTheme, theme } = useTheme();
   let currentTheme = theme === 'system' ? systemTheme : theme;
   
   return (
      <>
         <AnimatedCursor
            innerSize={12}
            outerSize={60}
            outerAlpha={0.1}
            color={currentTheme === 'dark' ? '255,255,255' : currentTheme === 'light' ? '0,0,0' : '13,115,231'}
            innerScale={2.5}
            outerScale={0.8}
            trailingSpeed={18}
            clickables={[
               'a',
               'button',
               '.heading',
            ]}
         />
      </>
   )
}

export default Cursor;