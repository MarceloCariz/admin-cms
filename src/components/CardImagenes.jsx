import React, { useEffect, useRef, useState } from 'react'
import {Buffer} from 'buffer';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { actualizarTodo, cambiarEstado, obtenerImagenes } from '../helpers/getImages';


const Container = styled.div`
 display: grid;
  width: 200px;
  justify-items: left;
`;
const Img = styled.img`
  width: 150px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 4px 4px 2px 2px;
  border-radius: 5px ;
  font-size: 0.8rem;
  text-align: left;
  font-weight: 500;
`;

const P = styled.p`

  font-size: 0.8rem;
  text-align: left;
  font-weight: 500;
`;

const Div = styled.div`
   display: flex;
   flex-direction: column;
   width: 150px;
   gap: 0.5rem;
`;

const CardImagenes = ({imagenes}) => {
  const [imagen, setImagen] = useState({});
  const [actualizado, setActualizado] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputArchivo = useRef(null);
  useEffect(()=>{
    setImagen(imagenes);
  },[imagenes])
  // const {_id,title, active,filename, path } = imagenes;

  const {_id,title, active,filename, path } = imagen;

  const handleImage = () =>{
    window.open(path)
  }

  const handleActive = () =>{
    cambiarEstado( _id, active);
    const obj ={
      ...imagen, active: !active,
    }
    setImagen(obj) 
  }


  const handleInputChange = (e) =>{
    setImagen({...imagenes, 
      [e.target.name]: e.target.value
    })
    setActualizado(true)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        // dispatch(startUploading(file));
        setSelectedFile(file)
        // console.log(selectedFile);
    }
    setActualizado(true)

}

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.set('title', title)
    // console.log(formData.get('title'))

        
        
    actualizarTodo(_id,formData)
    setActualizado(false)

  }


    return (
    <Container>
      <form onSubmit={handleSubmit} method="PUT">
        
        <Div>
        <Img src={path} alt="" onClick={handleImage} />
        <input onChange={handleFileChange} ref={inputArchivo} id="fileSelector" name="file" type="file" className="sr-only" />
            <Input name='title' onChange={handleInputChange} value={title || ''}/> 
            {actualizado && (
           <button>Actualizar</button>

            )}
        </Div>
       

        <P>Nombre Archivo: </P>
        <Input name='filename' disabled onChange={handleInputChange} value={filename || ''}/>
        <p onClick={handleActive} className={`${active ? 'activo':  'inactivo'}`}>{active ? 'Activo' : 'Inactivo'}</p>
      </form>
      
    </Container>
  )
}

export default CardImagenes