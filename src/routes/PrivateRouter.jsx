import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layouts/Layout'
import { CrearPregunta } from '../pages/CrearPregunta'
import Imagenes from '../pages/Imagenes'
import Inicio from '../pages/Inicio'
import Preguntas from '../pages/Preguntas'
import SubirImagen from '../pages/SubirImagen'

const PrivateRouter = () => {
  return (
    <Routes>
        <Route path='/inicio' element={<Layout/>}>
            <Route index  element={<Inicio/>}/>
            <Route  path='imagenes' element={<Imagenes/>}/>
            <Route  path='subirImagen' element={<SubirImagen/>}/>
            <Route  path='preguntas' element={<Preguntas/>}/>
            <Route  path='crear-pregunta' element={<CrearPregunta/>}/>



        </Route>

    </Routes>
  )
}

export default PrivateRouter