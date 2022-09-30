import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #3a3aec;
  padding-top: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;
const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  text-align: center;
  margin: 0 auto;
  /* background-color: red; */
`;

const Enlace = styled(Link)`
  font-size: 1.2rem;
  text-align: left;
  color: white;
  cursor: pointer;
  text-decoration: none;

`;

const Titulo = styled(Link)`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Layout = () => {
  return (
    <Container>
      <Aside>
        <Titulo to="/inicio">Totem App</Titulo>
        <Enlace to="/inicio">Dashbaord</Enlace>
        <Enlace to="imagenes">Imagenes</Enlace>
        <Enlace to="subirImagen">Subir Imagen</Enlace>
        <Enlace to="subirArchivo">Subir Archivos Docente</Enlace>
        <Enlace to="subirArchivoAlumno">Subir Archivos Alumno</Enlace>
        <Enlace to="preguntas">Preguntas</Enlace>
        <Enlace to="evaluacion">Evaluaciones</Enlace>


      </Aside>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
