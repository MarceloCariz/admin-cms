import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Evaluacion } from '../components/evaluaciones/Evaluacion'
import { obtenerEvaluaciones } from '../helpers/getEvaluaciones'

const Evaluaciones = () => {

    const [evaluacion, setEvaluacion] = useState([])
    useEffect(()=>{
        const cargarEvaluaciones= async()=>{
            const resultado = await obtenerEvaluaciones();
            setEvaluacion(resultado)
        }

        cargarEvaluaciones();
    },[])
  return (
    <>
    <H2>Evaluaciones</H2>
  
    <Evaluacion  evaluacion={evaluacion}/>
 
    </>
  )
}
const H2 = styled.h2`
  text-align: center;
`;
export default Evaluaciones