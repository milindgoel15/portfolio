export default interface ThemeInterface {
   theme: string | undefined;
   systemTheme: "dark" | "light" | undefined;
   setTheme: (theme: string) => void;
   mounted: boolean;
   setMounted: React.Dispatch<React.SetStateAction<boolean>>
}