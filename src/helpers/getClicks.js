import clienteAxios from "../axios"

export const obtenerClicks = async() =>{
    const {data} = await clienteAxios('/click/')
    return data;
}