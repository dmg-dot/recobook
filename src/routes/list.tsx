import styled from "styled-components"

const NavBar = styled.div`
    display:flex;
    align-items: center;
    height:70px;
    background:lightgrey;
`

const Logo = styled.h4`
    margin-left:20px;
    width:100px;
`

const Link = styled.a`
    text-align:center;
    width:50px;
    text-decoration:none;
    color:black;
`

const BookList = styled.div`
    background:rgb(243, 248, 253);
    width:100%;
    height:100%;
    padding-bottom:50px;
`

const ListComponent = styled.div`
    width:95%;
    height:150px;
    background:white;
    margin: 0 auto;
    border-radius:10px;
    margin-top:30px;
    box-shadow:2px 2px 10px 1px lightgrey;
`

const Title = styled.h2`
    color:black;
    margin-left:20px;
    font-size:25px;
`

const ListTitle = styled.h2`
    
`

const ListContent = styled.p`
    
`
const ListButton = styled.div`
    
`



export default function List() {
    return (
        <>
            <BookList>
                <NavBar>
                    <Logo>RecoBook</Logo>
                    <Link href="/">Home</Link>
                    <Link href="/list">List</Link>
                    <Link href="/write">Write</Link>
                </NavBar>
                <Title>List</Title>
                <ListComponent>
                    <ListTitle>제목</ListTitle>
                    <ListContent></ListContent>
                    <ListButton></ListButton>
                </ListComponent>
                <ListComponent></ListComponent>
                <ListComponent></ListComponent>
            </BookList>
        </>
    )
}