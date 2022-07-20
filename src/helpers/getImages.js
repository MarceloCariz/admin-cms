import axios from "axios"


export const obtenerImagenes  = async() =>{
    const {data} = await axios.get('https://totem.ivaras.cl:7002/api/imagenes/')
    // console.log(data)
    const respuesta = data;
    return respuesta;

}

export const cambiarEstado = async(id, datos) =>{
    console.log(datos)
    const {data} = await axios.put(`https://totem.ivaras.cl:7002/api/imagenes/${id}`);


}



