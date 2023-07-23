import { useState } from "react";

const { createContext } = require("react");

export const demoContext = createContext();



export function ContextProvider({ children }) {
    let [state, setState] = useState([])

    

    return <demoContext.Provider value={{ state, setState }}>{children}</demoContext.Provider>
}