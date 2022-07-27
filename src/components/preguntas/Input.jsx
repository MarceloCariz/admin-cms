import React, { useEffect, useState } from 'react'
import styled from 'styled-components'





const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;
const Input = ({respuesta, id}) => {
    const [answer, setAnswer] = useState('')
    const [active, setActive] = useState(false)
    useEffect(()=>{
        setAnswer(respuesta)

    },[])
    const handleOnChange = ({target}) =>{
        setAnswer(target.value)
        setActive(true)
    }
    return (
    <Div>
        <textarea name="" id={id} cols="120"onChange={handleOnChange} value={answer} rows="6"></textarea>
        {/* <input type="text" value={answer} onChange={handleOnChange} /> */}
        {
            active && (
                <button>Actualizar</button>
            )
        }
    </Div>
  )
}

export default Input