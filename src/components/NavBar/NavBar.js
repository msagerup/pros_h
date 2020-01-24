import React from 'react';
import styled from 'styled-components';
import logoImg from './navlogo.jpg'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    height: 100px;
    padding: 10px 20px 10px 20px;
    color: white;
    display: grid;
    grid-template-columns: 100px auto 40px;
    grid-template-rows: 1fr;
    box-shadow: 0 4px 5px -2px rgba(0,0,0,.2);
`
const Logo = styled.div`
    grid-column: 1 /2;
    align-self: center;
    img {
        height: 40px;
    }
`
const Login = styled.div `
    font-size: 1rem;
    grid-column: 3 /4;
    align-self: center;
    color: #3d3d3d;
`

export default function NavBar() {
    return (
        <Nav>
           <Logo><img src={logoImg} alt="Logo"/></Logo>
                <Login>Login</Login>
           
        </Nav>
    )
}
