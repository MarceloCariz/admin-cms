import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Categoria from '../components/preguntas/Categoria';
import Pregunta from '../components/preguntas/Pregunta';
import { obtenerPreguntas } from '../helpers/getPreguntas'




const Categorias = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 12rem);
  gap: 2rem;
`;

const Preguntas = () => {

    const [preguntas, setPreguntas] = useState({})
    const [categoria, setCategoria] = useState({})
    const [subCategoria, setSubCategoria] = useState({})
    const [categoriaOption, setCategoriaOption] = useState('')
    const [active, setActive] = useState(false)

    useEffect(() => {
        const obtenerData = async()=>{
            const {data, categories, subcategories} =await  obtenerPreguntas();
            setPreguntas(data)
            setCategoria(categories)
            setSubCategoria(subcategories)
        }
        obtenerData()
      

    }, [])
    
  return (
    <>
        <h2>Preguntas</h2>
        <Categorias>
        <Categoria categoria={categoria} subcategoria={subCategoria} setCategoriaOption={setCategoriaOption} setActive={setActive} active={active}/>
        </Categorias>

        <Pregunta preguntas={preguntas} categoria={categoria}  subCategoria={subCategoria} categoriaOption={categoriaOption} active={active}/>

    </>
  )
}

export default Preguntas