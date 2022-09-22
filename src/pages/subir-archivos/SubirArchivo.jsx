import React, { useState } from 'react';
import "./subir-archivos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowUp, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const SubirArchivo = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeInputFile = (event) => {
    
    console.log(event.target.files[0]);
    
    setSelectedFile(event.target.files[0]);
  }

  const onSubmitInputFile = (e) => {
      e.preventDefault();

      if (!selectedFile) {
        alert('Debes cargar una imagen')
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log(formData.get('file'));
  }


  return (
    <form onSubmit={onSubmitInputFile}>
      <div className='row-archivos row m-5'>
        <div className='col-archivos col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <h3>Cargar Alumnos</h3>
              <div className='image-upload'>
              <label for="file-input" className='icono-archivo'>
                  <FontAwesomeIcon icon={faFileArrowUp} />
                </label>

                <input id='file-input' className='icono-archivo' type="file" onChange={onChangeInputFile}/>

              </div>


          
        </div>
        <div className='col-archivos col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <h3>Cargar Docentes</h3>
      
            <div className='image-upload'>
            <label for="file-input" className='icono-archivo'>
                  <FontAwesomeIcon icon={faFileArrowUp} />
                </label>

                <input id='file-input' className='icono-archivo' type="file" onChange={onChangeInputFile}/>
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


        
        

  )
}
