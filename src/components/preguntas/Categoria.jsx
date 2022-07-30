import React, { useState } from 'react'
import styled from 'styled-components'





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
    <h2>Modifique las preguntas y respuestas</h2>


    <Div>

    {
            categoria.length > 0 && (
                categoria.map((categoria, i) =>{
                return (
                    <div key={i}>
                       <Label htmlFor={`${categoria}`}>{categoria}</Label>
                       <Select onChange={handleClickOption} onClick={(e)=>  handleClick({categoria},e)} name={`${categoria}`} id={`${categoria}`} >
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
                         
                       </Select> 
                      
                    </div>

                )
            })
            )
        }
    </Div>
    </>
  )
}
const Label = styled.label`
  text-transform: capitalize;
  margin-right: 0.8rem;
`;

const Select = styled.select`
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #E8EAED;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098A9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
`;
const Div = styled.div`
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(5, 17rem); */
  gap: 0.5rem;
`;

export default Categoria