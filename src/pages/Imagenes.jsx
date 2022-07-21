import { useEffect, useState } from "react";
import styled from "styled-components";
import CardImagenes from "../components/CardImagenes";
import { obtenerImagenes } from "../helpers/getImages";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 12rem);
  align-items: center;
  justify-items: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Imagenes = () => {
  const [imagen, setImagen] = useState([]);

  useEffect(() => {
    // const cargarImagenes = async()=>{
    //   const resultado = await obtenerImagenes()
    //   setImagen(resultado)
    const cargarImagenes = async () => {
      const resultado = await obtenerImagenes();
      setImagen(resultado);
    };
    // }
    cargarImagenes();
  }, []);
  console.log("1");
  return (
    <>
      <H2>Imagenes</H2>
      <Container action="">
        {imagen
          ? imagen.map((img) => {
              return (
                <CardImagenes
                  key={img._id}
                  imagenes={img}
                  setImagen={setImagen}
                  
                />
              );
            })
          : "Cargando ..."}
      </Container>
    </>
  );
};

export default Imagenes;
