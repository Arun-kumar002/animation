import {createContext} from 'react'

export const Global=createContext()

export const Provider=({children})=>{

    return <Global.Provider value={'arun'}>
        {children}
    </Global.Provider>
}
