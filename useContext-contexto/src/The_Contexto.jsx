import React, {  createContext, useState } from 'react'

export const The_Contexto = createContext()


export const Datos = ({children})=>{
    const valores=[{
        titulo:"Aprenda React intensivamente con una profesora nativa",
        texto:"2 semanas. Una profesora sólo para ti (12h/día)",
        boton1:"Profesora",
        foto:"marta.jpg",
        nombre:"Marta Ríos",
        boton2:"Lugar",
        direccion:"48 St Laurent Boulevard, Montreal, Canadá"
    },{
        titulo:"Learn React intensively with a native teacher",
        texto:"2 weeks. A teacher just for you (12h/day)",
        boton1:"Professor",
        nombre:"Grace Trembley",
        foto:"grace.jpg",
        boton2:"Lotacion",
        direccion:"65 Stonehaven, Ottawa, Canadá"
    },{
        titulo:"Apprenez React intensément avec un professeur natif",
        texto:"2 semaines. Un professeur rien que pour vous rien que pour vous  intensément(12h/jour)",
        boton1:"Professeur",
        nombre:"Aimée Mathieu",
        foto:"aimee.jpg",
        boton2:"Emplacement",
        direccion:"2700 Rue Jean-Perrin #190, Québec, Canadá"
    },{
        idioma:1
    }]
    // console.log(valores);
    

    const [Color,setColor]=useState('silver');
    const [alumno,setAlumno] = useState(valores);



    return(
        
        <The_Contexto.Provider value={{Color,setColor,alumno,setAlumno}}>

            {children}

        </The_Contexto.Provider>
    )
}



