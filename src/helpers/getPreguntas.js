import axios from "axios"
import clienteAxios from "../axios";




export const obtenerPreguntas = async() =>{
    const {data} = await clienteAxios('/preguntas');
 
    const resultado =  data.filter(function( element ) {return element.subcategoria !== undefined;});
    
    const subCategories = [...new Set(resultado.map(({categoria, subcategoria, _id})=> {       
        return  {_id, categoria, subcategoria}
    }))]

    const categories = [...new Set(resultado.map(({categoria, subcategoria, _id})=> {
        return   categoria
    }))]

    let myObj = {};

    const subcategories = subCategories.filter((ele, i)=> myObj[ele.subcategoria] ? false : myObj[ele.subcategoria] = true) ;

    // console.log(categories, subCategories)
    return {data, subcategories, categories};

}

export const actualizarPregunta = async(id, actualizado) =>{
    try {
        console.log(actualizado)
       const {ok} = await clienteAxios.put( `/preguntas/update/${id}`,actualizado);
       return ok;
        
    } catch (error) {
        console.log(error)
    }
}

export const saveAsk = async(data) => {
    await axios({
        url: "https://totem.ivaras.cl:7002/api/preguntas/save",
        method: "post",
        data: data,
        headers: {'Content-Type': 'multipart/form-data' }
    });
}