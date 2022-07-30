import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Categoria from '../components/preguntas/Categoria';
import Pregunta from '../components/preguntas/Pregunta';
import { obtenerPreguntas } from '../helpers/getPreguntas'
import '../index.css';
import {Link} from 'react-router-dom';




const Categorias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: auto;
`;

const Preguntas = () => {

    const [preguntas, setPreguntas] = useState({})
    const [categoria, setCategoria] = useState({})
    const [subCategoria, setSubCategoria] = useState({})
    const [categoriaOption, setCategoriaOption] = useState('')
    const [active, setActive] = useState(false)

    useEffect(() => {
        const obtenerData = async()=>{
            const {data, categories, subcategories} = await  obtenerPreguntas();
            setPreguntas(data)
            setCategoria(categories)
            setSubCategoria(subcategories)
        }
        obtenerData()
      

    }, [])
    
  return (
    <>




        <div className='header-ask'>
        <h2>Preguntas</h2>


        <Link className='btn-ask' to='../crear-pregunta'>Crear Pregunta</Link>

        </div>
        <hr />
        <Categorias>
        <Categoria categoria={categoria} subcategoria={subCategoria} setCategoriaOption={setCategoriaOption} setActive={setActive} active={active}/>
        </Categorias>

        <Pregunta preguntas={preguntas} categoria={categoria}  subCategoria={subCategoria} categoriaOption={categoriaOption} active={active}/>

    </>
  )
}

export default Preguntas