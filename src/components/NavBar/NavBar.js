import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import logoImg from './navlogo.jpg'
import { AppContextData } from '../../Context/ContextData'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    height: 100px;
    padding: 10px 20px 10px 20px;
    /* color: white; */
    display: grid;
    grid-template-columns: 400px auto 100px 100px;
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
const Login = styled.div`
    font-size: 1rem;
    grid-column: 3 /4;
    align-self: center;
    color: #3d3d3d;
`
const MenuButton = styled.div`
   grid-column: 4/5;
   align-self: center;

`

export default function NavBar() {
   const { toggleMenu, signedIn } = useContext(AppContextData)
   const history = useHistory()
   return (
      <Nav>
         <Logo><img src={logoImg} alt="Logo" /></Logo>
         <Login>{signedIn ? (
            null
         ) : (
               <button onClick ={() => history.push('/login')}>Sign in</button>
            )}
         </Login>
         <MenuButton>
            <button onClick={() => toggleMenu()} > Menu P/H</button>
         </MenuButton>
      </Nav>
   )
}
