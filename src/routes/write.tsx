import React, { useState } from "react";
import styled from 'styled-components';

const Main = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px;
    border: 1px solid gray;
    text-align: center;
`

export default function Write(){
    const [inputValue, setInputValue] = useState('');
    const onSubmit = () => {
        //글 저장

        setInputValue('');
    }
    return(
        <Main>
            <div>
                <input 
                    type="text"
                    value={inputValue} 
                    placeholder="내용을 입력하세요."
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
             <div>
                <textarea 
                    value={inputValue} 
                    placeholder="내용을 입력하세요."
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </div>
            <button onClick={onSubmit}>저장</button>
        </Main>
    )
    
}