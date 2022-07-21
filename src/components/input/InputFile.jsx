import { useState } from 'react';
import { guardarTodo } from '../../helpers/getImages';
import './input.css';


export const InputFile = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const [fileInputTitle, setFileInputTitle] = useState("");

    const onChangeInpuFile = (e) => {
        setSelectedFile(e.target.files[0]);
        const inputTitle = e.target.files[0].name;
        setFileInputTitle(inputTitle);

        console.log(inputTitle);
    }

    const onSubmitInputFile = (e) => {
        if (!selectedFile) {
            alert('Debes cargar una imagen')
            return
        }
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.set('title', fileInputTitle);
        guardarTodo(formData);

        
    }

    return (
        <form className='input-form' onSubmit={onSubmitInputFile}>
            <div>
                <h2 className='btn-titulo'>Buscar Imagen</h2>
                <input className='file-input' type="file" onChange={onChangeInpuFile} placeholder="Agregar Imagen" />
            </div>
            <button className='btn-input' onClick={onSubmitInputFile} type="button">Subir</button>
        </form>
    )

}
