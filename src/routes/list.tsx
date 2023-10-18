import styled from "styled-components"



const BookList = styled.div`
    background:rgb(22, 25, 29);
    width:100%;
    height:100vh;
    /* padding-bottom:50px; */
`

const ListComponent = styled.div`
    width:95%;
    height:150px;
    background:white;
    margin: 0 auto;
    border-radius:10px;
    margin-top:30px;
    box-shadow:2px 2px 10px 1px lightgrey;
    align-items:center;
`

const Title = styled.h2`
    color:black;
    margin:0;
    padding-top:20px;
    margin-left:20px;
    font-size:25px;
`

const ListTitle = styled.h2`
    padding-top:20px;
    margin-left:20px;
    width:80%;
    height: 20%;
    overflow:hidden;
`

const ListContent = styled.p`
    margin-left:20px;
    width:80%;
    height:18px;
    overflow:hidden;
    margin:none;
`
const ListButton = styled.div`
    
`



export default function List() {
    return (
            <BookList>
                <Title>List</Title>
                <ListComponent>
                    <ListTitle>제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</ListTitle>
                    <ListContent>내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다내용이다</ListContent>
                    <ListButton></ListButton>
                </ListComponent>
                <ListComponent></ListComponent>
                <ListComponent></ListComponent>
            </BookList>
    )
}