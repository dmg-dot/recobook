import styled from "styled-components"
import React from "react"
const NavBarWrap = styled.div`
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

export default function NavBar() {
    return (
        <NavBarWrap>
            <Logo>RecoBook</Logo>
            <Link href="/">Home</Link>
            <Link href="/list">List</Link>
            <Link href="/write">Write</Link>
        </NavBarWrap>
    )
}