import clienteAxios from "../axios"



export const obtenerEvaluaciones = async() =>{
    const {data} = await clienteAxios('/evaluacion/')
    return data;
}