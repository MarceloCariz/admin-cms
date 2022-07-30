import React, { useEffect, useState } from 'react'
import Input from './Input'

const Pregunta = ({categoriaOption,preguntas, active}) => {

    const [preguntasFiltradas, setPreguntasFiltradas] = useState({})
    const [respuestaF, setRespuesta] = useState({})
    const [activePreguntas, setActivePreguntas] = useState(true)
    useEffect(()=>{
      if(categoriaOption && active){
        const filtrado = preguntas.filter(({subcategoria})=> subcategoria === categoriaOption);
        setPreguntasFiltradas(filtrado);
        
      }
    },[categoriaOption, active])
    const handleClick = (e) =>{
      setActivePreguntas(true)

      setRespuesta({id: e._id, respuesta: e.respuesta})
  }

  
  
  return (
    <div>
      {preguntasFiltradas.length > 0  && (
        preguntasFiltradas.map(({_id, pregunta, respuesta},i)=>{
          return(
            <div key={_id}>
           
               <Input pregunta={pregunta} respuesta={respuesta} id={_id} />

            </div>
          )
        })
      )}

    </div>
  )
}

export default Pregunta