import dynamic from 'next/dynamic';
import { useTheme } from "next-themes";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
   ssr: false
});

let Cursor = () => {
   let lightCursor = '255,255,255';
   let darkCursor = '0,0,0';
   let blueCursor = '13, 115, 231';
   let cursor = ''

   let { systemTheme, theme } = useTheme();

   let currentTheme = theme === 'system' ? systemTheme : theme;

   if (currentTheme === 'dark') {
      cursor = lightCursor;
   } else if (currentTheme === 'light') {
      cursor = darkCursor;
   } else {
      cursor = blueCursor;
   }

   return (
      <>
         <AnimatedCursor
            innerSize={12}
            outerSize={60}
            outerAlpha={0.1}
            color={`${cursor}`}
            innerScale={2.5}
            outerScale={0.8}
            trailingSpeed={18}
            clickables={[
               'a',
               'button',
               '.heading',
               '.skillCard'
            ]}
         />
      </>
   )
}

export default Cursor;