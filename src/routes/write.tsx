import { useState } from "react";
import styled from 'styled-components';
import { dbService } from "../fbase";

const WriteWrap = styled.div`
    width:100%;
    height:100vh;
    background:rgb(243, 248, 253);
`

const Main = styled.div`
    margin-top:20px;
    text-align: center;
    align-items:center;
`

const Title = styled.h2`
    color:black;
    margin:0;
    padding-top:20px;
    margin-left:20px;
    font-size:25px;
`

const Input = styled.input`
    width:90%;
    height:25px;
    border-radius:15px;
    border: 2px solid black;
    padding:10px;
    font-size:17px;
    margin-bottom:20px;
    &:focus{
        outline:none;
        border-color:rgb(164, 164, 164);
    }
`

const TextArea = styled.textarea`
    width:90%;
    height:300px;
    border-radius:15px;
    border: 2px solid black;
    padding:10px;
    font-size:17px;
    margin-bottom:20px;
    resize:none;
    &:focus{
        outline:none;
        border-color:rgb(164, 164, 164);
    }
`

const Submit = styled.button`
    background:goldenrod;
    border:none;
    border-radius:10px;
    font-size:15px;
    padding:13px;
    &:hover{
        background-color:lightgray;
    }
    &:active{
        background-color:lightblue;
    }
    float:right;
`

const SubmitWrap = styled.div`
    width:90%;
    margin:0 auto;
`

export default function Write() {
    const [title, setTitle] = useState('');
    const [sentence, setSentence] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = async (e) => {
        //글 저장
        await e.preventDefault();
        dbService.collection("dot").add({
            title,
            sentence,
            description,
            createAt : Date.now(),
        });
        setDescription('');
        setSentence('');
        setTitle('');
    }
    return (
        <>
            <WriteWrap>
                <Title>Write</Title>
                <Main>
                    <form>
                        <Input
                            placeholder="책 제목"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </form>
                    <form>
                        <Input
                            placeholder="기억에 남는 구절"
                            type="text"
                            value={sentence}
                            onChange={(e) => setSentence(e.target.value)}
                        />
                    </form>
                    <form>
                        <TextArea
                            placeholder="내용을 입력하세요."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </form>
                    <SubmitWrap>
                        <form><Submit onClick={onSubmit}>게시</Submit></form>
                    </SubmitWrap>
                </Main>
            </WriteWrap>
        </>
    )
}