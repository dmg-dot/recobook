import React, { useState } from "react";
import styled from 'styled-components';

const InputField = styled.input`
  border: none;
  width: 100%;
`;
export default function Write(){
    const [inputValue, setInputValue] = useState('');
    const onSubmit = () => {
        //글 저장
        
        

        setInputValue('');
    }
    return(
        <>
            <InputField
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={onSubmit}>저장</button>
        </>
    )
    
}