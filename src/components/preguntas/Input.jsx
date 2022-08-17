import React, {useState } from 'react'
import styled from 'styled-components'

import {actualizarPregunta} from '../../helpers/getPreguntas';





const Input = ({respuesta, id, pregunta, subcategoria}) => {
    // console.log(subcategoria)
    const [formValues, setFormValues] = useState({respuesta:respuesta, pregunta: pregunta, subcategoria: subcategoria})
    const [alerta, setAlerta] = useState('');
    const [active, setActive] = useState(false)

    const handleOnChange = ({target}) =>{
        console.log(formValues)
        setFormValues({...formValues,
            [target.name]: target.value
        })
        setActive(true)
    }

    const handleActualizar = (e) =>{
        e.preventDefault();
        const respuesta =actualizarPregunta(id, formValues)
        if(respuesta){
          setAlerta('Actualizado Correctamente')
          setTimeout(() => {
            setAlerta('')
          }, 2000);
        }else{
          setAlerta('Hubo un error')

        }
    }
    return (
    <Div onSubmit={handleActualizar}>
   
        <DivInput>
            <P>Pregunta</P>
            <InputS id={id} name="pregunta" value={formValues.pregunta} onChange={handleOnChange}/>

        </DivInput>
        <DivSub>
            <P>Subcategoria</P>
            <InputS id={id} name="subcategoria" value={formValues.subcategoria} onChange={handleOnChange}/>

        </DivSub>

        <DivTextarea>
        <P>Respuesta</P>

        <TextArea name="respuesta"id={id} onChange={handleOnChange} value={formValues.respuesta} ></TextArea>
        {/* <input type="text" value={answer} onChange={handleOnChange} /> */}
       
        </DivTextarea>
        {
            active && (
                <Button type='submit' className='activo'>{alerta ? alerta :' Actualizar'}</Button>
            )
        }
    </Div>
  )
}

const P = styled.p`
  color: black;
`;
const Button  = styled.button`
  padding: 10px 18px 10px 18px;  
  border: 1px solid greenyellow;
`;
const Div = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 1rem;
  border: 1px solid  black;
  border-radius: 5px;
  padding-bottom: 2rem;
  margin-top: 1rem;

`;

const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  margin-top: 2rem;
  width:  90%;  
`;
const DivSub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  /* margin-top: 2rem; */
  width:  90%;  
`;
const DivTextarea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  width:  90%;  
`;

const InputS = styled.input`
  border: 1px solid  lightgray;
  border-radius: 10px;
  padding: 0.6rem;
  width:  100%;  
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 5rem;
  border: 1px solid  lightgray;
  border-radius: 10px;
`;
export default Input