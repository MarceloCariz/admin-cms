import React, { useState } from 'react';
import "./subir-archivos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowUp, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { read, utils } from 'xlsx';
import { uploadAlumno, uploadDocente } from '../../helpers/getArchivos';

export const SubirArchivo = () => {

  //docente
  const [file, setFile] = useState(null);
  const [fileTitle, setFileTitle] = useState(null);
  const [sheetNames, setSheetNames] = useState([]);
  const [sheetData, setSheetData] = useState({});

  const readDataFromExcel = (data) => {
    const wb = read(data);
    setSheetNames(wb.SheetNames);

    for(let i = 0; i < wb.SheetNames.length; i++) {
      let sheetName = wb.SheetNames[i];

      const worksheet = wb.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(worksheet);

      setFile(jsonData);

    }
    
  }
  
  const onChangeInputFile = async (e) => {
    
    const myFile = e.target.files[0];
    
    if (!myFile){
      return ;
    }
  

    setFileTitle(myFile.name);
    
    const data = await myFile.arrayBuffer();
    readDataFromExcel(data);
    
    

    

  }

  //alumno
  const [fileAlumno, setFileAlumno] = useState(null);
  const [fileTitleAlumno, setFileTitleAlumno] = useState(null);
  const [sheetNamesAlumno, setSheetNamesAlumno] = useState([]);
  const [sheetDataAlumno, setSheetDataAlumno] = useState({});



  const readDataFromExcelAlumno = (data) => {
    const wb = read(data);
    setSheetNamesAlumno(wb.SheetNames);

    for(let i = 0; i < wb.SheetNames.length; i++) {
      let sheetName = wb.SheetNames[i];

      const worksheet = wb.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(worksheet);

      setFileAlumno(jsonData);

    }
    
  }
  
  const onChangeInputFileAlumno = async (e) => {
    
    const myFile = e.target.files[1];
    
    if (!myFile){
      return ;
    }

    setFileTitleAlumno(myFile.name);
    
    const data = await myFile.arrayBuffer();
    readDataFromExcelAlumno(data);
  }

  const onSubmitInputFile = (e) => {
      e.preventDefault();

      // if (!file) {
      //   alert('Debes cargar un archivo .xlsx o .xls')
      //   return;
      // }

      // if (!fileAlumno) {
      //   alert('Debes cargar un archivo .xlsx o .xls')
      //   return;
      // }

      if (fileAlumno !== null) {
        uploadAlumno(fileAlumno);
      }else{return;}

      if (file !== null){
        uploadDocente(file);
      }else{return;}


  }


  return (
    <>

      {!fileTitle &&  <h3>Debes subir un archivo para Docente</h3>}
      {fileTitle && <h3>Nombre del archivo: {fileTitle}</h3>}
      {!fileTitleAlumno &&  <h3>Debes subir un archivo para Alumno</h3>}
      {fileTitleAlumno && <h3>Nombre del archivo: {fileTitleAlumno}</h3>}

      <form onSubmit={onSubmitInputFile}>
        <div className='row-archivos row m-5'>
          <div className='col-archivos col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <h3>Cargar Alumnos</h3>
                <div className='image-upload'>
                <label for="file-input" className='icono-archivo'>
                    <FontAwesomeIcon icon={faFileArrowUp} />
                  </label>

                  <input id='file-input' className='icono-archivo' type="file" accept='xlsx, xls' multiple={false} onChange={(e) => onChangeInputFileAlumno(e)}/>

                </div>


            
          </div>
          <div className='col-archivos col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <h3>Cargar Docentes</h3>
        
              <div className='image-upload'>
              <label for="file-input" className='icono-archivo'>
                    <FontAwesomeIcon icon={faFileArrowUp} />
                  </label>

                  <input id='file-input' className='icono-archivo' type="file" accept='xlsx, xls' multiple={false} onChange={(e) => onChangeInputFile(e)}/>
                </div>

        
          </div>
        </div>

        <button className='btn-archivo'>
          <span>
            Enviar
          </span> 
          <span className='icono-enviar'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </button>
      </form>
    </>




        
        

  )
}
