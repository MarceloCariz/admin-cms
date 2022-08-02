import React from 'react'
import styled from 'styled-components';

export const Evaluacion = ({evaluacion}) => {
    console.log(evaluacion)
  return (
    <Container>
        {evaluacion.length > 0 &&
            evaluacion.map(({_id, problema, categoria, evaluacion, correo})=>
             (
                <Div key={_id}>
                    <P>{problema}</P>
                    <P>Categoria: <Span>{categoria}</Span></P> 
                    <P className={evaluacion === 'SI' ? 'activo' : 'inactivo'}>Evaluacion: {evaluacion}</P>
                    <P>Correo: <Span>{correo}</Span></P>

                </Div>
             )   
            )
        }
    </Container>
  )
}

const  P = styled.p`
  text-transform: capitalize;  
  font-weight: 700;
`;
const Span = styled.span`
  color: black;
  font-weight: 500;  
`;

const Div = styled.div`
  border: 1px solid lightgray;
  padding: 0.5rem;
  width: 18rem  ;

`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 10px;
  width: auto;
`;