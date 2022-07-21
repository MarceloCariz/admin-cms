import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layouts/Layout'
import Imagenes from '../pages/Imagenes'
import Inicio from '../pages/Inicio'
import SubirImagen from '../pages/SubirImagen'

const PrivateRouter = () => {
  return (
    <Routes>
        <Route path='/inicio' element={<Layout/>}>
            <Route index  element={<Inicio/>}/>
            <Route  path='imagenes' element={<Imagenes/>}/>
            <Route  path='subirImagen' element={<SubirImagen/>}/>


        </Route>

    </Routes>
  )
}

export default PrivateRouter