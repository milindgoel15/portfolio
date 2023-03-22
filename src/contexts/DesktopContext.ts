import { createContext } from "react";
import DesktopModeInterface from "../interfaces/DesktopModeInterface";

let DesktopContext = createContext<DesktopModeInterface>({
   isDesktopMode: false,
})

export default DesktopContext;