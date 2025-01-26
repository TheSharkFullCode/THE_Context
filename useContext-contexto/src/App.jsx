import './App.css'
import Usecontext from './Dist/Usecontext'
import Colores from './Dist/Colores'
import { Datos } from './The_Contexto'
import { useState } from 'react'
import Pagina2 from './Dist/Pagina2'
import Pagina3 from './Dist/Pagina3'
import ComponentIdiomas from './Dist/components/ComponentIdiomas'

function App() {

  const [count, setCount] = useState(0);

  return (

    <>
      <Datos>        
    <div className='container'>
    <Usecontext></Usecontext>
    <Pagina2></Pagina2>
    <Pagina3></Pagina3>
     
    </div>
    <Colores></Colores>

    
    <ComponentIdiomas></ComponentIdiomas>
    </Datos>

    
    </>
  )
}

export default App
