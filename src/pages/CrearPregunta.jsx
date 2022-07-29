import React, { useState } from 'react'
import '../index.css';
import { useNavigate } from 'react-router-dom'
import { saveAsk } from '../helpers/getPreguntas';

export const CrearPregunta = () => {

    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [response, setResponse] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");


    const onClick = (e) => {
        e.preventDefault();

        const newAsk = {

            pregunta: description,
            respuesta: response,
            categoria: category,
            subcategoria: subCategory,
            ranking: 0,
        }
        console.log(newAsk);

        saveAsk(newAsk);



        navigate("../preguntas");


    };


    return (
        <>
            <h1 className='ask-h1'>Crear Pregunta</h1>


            <form className='form-ask'>

                <input
                    type="text"
                    placeholder='Titulo de la pregunta'
                    name='description'
                    onChange={(e) => {
                        const value = e.target.value;
                        console.log(value);
                        setDescription(value);
                    }}

                />

                <input
                    type="text"
                    placeholder='Resputa de la pregunta'
                    name='response'
                    onChange={(e) => {
                        const value = e.target.value;
                        setResponse(value);
                    }}

                />

                <div className='select-ask'>
                    <select name="" id="" className='select' onChange={(e) => {
                        const value = e.target.value;
                        setCategory(value);
                    }}>
                        <option value="">Categoria</option>

                        <option value="Biblioteca">Biblioteca</option>
                        <option value="Financiamiento">Financiamiento</option>
                        <option value="Desarrollo Estudiantil">Desarrollo Estudiantil</option>
                        <option value="Practica">Practica</option>
                    </select>
                    <select name="" id="" className='select' onChange={(e) => {
                        const value = e.target.value;
                        setSubCategory(value);
                    }}>
                        <option value="">Subcategoria</option>
                        <option value="Biblioteca">Biblioteca</option>
                        <option value="Gratuidad">Gratuidad</option>
                        <option value="Becas Estatales">Becas Estatales</option>
                        <option value="Cae">Cae</option>
                        <option value="Desarrollo Estudiantil">Desarrollo Estudiantil</option>
                        <option value="Talleres">Talleres</option>
                        <option value="Practica">Practica</option>
                    </select>
                </div>

                <button onClick={onClick} className='btn-ask'>
                    Guardar
                </button>

            </form>
        </>
    )
}
