import React, { useEffect, useState } from 'react'
import {Buffer} from 'buffer';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';


const Container = styled.div`
 display: grid;
  width: 200px;
  justify-items: left;
`;
const Img = styled.img`
  width: 50%;
  cursor: pointer;
`;

const P = styled.p`
  font-size: 0.8rem;
  text-align: left;
  font-weight: 500;
`;

const CardImagenes = ({imagen}) => {
    const {title, active,filename, path } = imagen;
  const handleImage = () =>{
    window.open(path)
  }
  return (
    <Container>
      <div>
        <Img src={path} alt="" onClick={handleImage} />
        <P>{title}</P> 
        <P>Nombre Archivo: <span>{filename}</span> </P>
        <p className={`${active ? 'activo':  'inactivo'}`}>{active ? 'Activo' : 'Inactivo'}</p>

      </div>
      
    </Container>
  )
}

export default CardImagenes