import React, { useState } from 'react'

const Categoria = ({categoria, subcategoria, setCategoriaOption, setActive, active}) => {

    const [subcategoriesOption, setSubcategoriesOption] = useState({})
    const [option, setOption] = useState({id: '', categoria: ''})

  const handleClick = (e)=>{
    const filtrar = subcategoria.filter((element) => e.categoria === element.categoria);
    setSubcategoriesOption(filtrar)
    // console.log(e)
    setActive(false)
    console.log(active)


  }

  const  handleClickOption = (e) =>{
    setCategoriaOption(e.target.value)
    setOption({ categoria: e.target.name})
    setActive(true)
  }
  return (
    <>
    {
            categoria.length > 0 && (
                categoria.map((categoria, i) =>{
                return (
                    <div key={i}>
                        <label htmlFor={`${categoria}`}>{categoria}</label>
                       <select onChange={handleClickOption} onClick={(e)=>  handleClick({categoria},e)} name={`${categoria}`} id={`${categoria}`} >
                        <option value="seleccione">Selecccione</option>
                         {
                            subcategoriesOption.length > 0 && (
                                subcategoriesOption.map(({_id, subcategoria, categoria})=>{
                                    return(
                                    <option key={_id} name={categoria} value={subcategoria  } >
                                        {option.categoria === categoria ? subcategoria  : subcategoria}</option>
                                )})
                            )
                         }
                       </select> 
                      
                    </div>

                )
            })
            )
        }
    </>

  )
}

export default Categoria