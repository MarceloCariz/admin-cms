import axios from 'axios';

export const uploadDocente = async(data) => {
    const resp = await axios({
        method: 'post',
        url: 'https://totem.ivaras.cl:7002/api/alumnos/upload-docente',
        data,
        headers: {'Content-Type': 'application/json'}
    });

    console.log(resp);
}

export const uploadAlumno = async(data) => {
    const resp = await axios({
        method: 'post',
        url: 'https://totem.ivaras.cl:7002/api/alumnos/upload-alumno',
        data,
        headers: {'Content-Type': 'application/json'}
    });

    console.log(resp);
}