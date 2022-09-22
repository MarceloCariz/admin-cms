import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layouts/Layout'
import { CrearPregunta } from '../pages/CrearPregunta'
import { Dashboard } from '../pages/Dashboard'
import Evaluaciones from '../pages/Evaluaciones'
import Imagenes from '../pages/Imagenes'
import Inicio from '../pages/Inicio'
import Preguntas from '../pages/Preguntas'
import { SubirArchivo } from '../pages/subir-archivos/SubirArchivo'
import SubirImagen from '../pages/SubirImagen'

const PrivateRouter = () => {
  return (
    <Routes>
        <Route path='/inicio' element={<Layout/>}>
            <Route index  element={<Dashboard/>}/>
            
            <Route  path='imagenes' element={<Imagenes/>}/>
            <Route  path='subirImagen' element={<SubirImagen/>}/>
            <Route  path='subirArchivo' element={<SubirArchivo/>}/>

            <Route  path='preguntas' element={<Preguntas/>}/>
            <Route  path='crear-pregunta' element={<CrearPregunta/>}/>

            <Route path='evaluacion' element={<Evaluaciones/>}/>



        </Route>

    </Routes>
  )
}

export default PrivateRouter