import React, {  createContext, useState } from 'react'

export const The_Contexto = createContext()


export const Datos = ({children})=>{

    const [Color,setColor]=useState('silver');


    return(
        
        <The_Contexto.Provider value={{Color,setColor}}>

            {children}

        </The_Contexto.Provider>
    )
}



