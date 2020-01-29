import React from 'react';
import { ContextDataProvider } from './Context/ContextData';
import NavBar from './components/NavBar/NavBar';
import LeftMenu from './components/Menu/LeftMenu';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import HooksPlay from './components/HooksPlay';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Pris from './components/Pris';
import PlayPin from './components/PlayPin'
import PageNotFound from './components/404/PageNotFount'
import './App.css';

// SubRutes of signin
import FirstStep from './components/Login/FirstStep'


import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";

//Css grid styling
const GridSection = styled.section`
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: auto;
    padding-top: 50px;
    @media (max-width:480px) {
      grid-template-columns: 1fr;

    }
`

function App() {
   return (
      <ContextDataProvider>
         <Router>
            <NavBar />
            <LeftMenu>
               <Container>
                  <GridSection>
                     <Switch>
                        <Route path='/pris/:produktId'>
                           <Pris />
                        </Route>
                        <Route path='/hooks' >
                           <HooksPlay />
                        </Route>
                        <Route path='/play'>
                           <PlayPin />
                        </Route>
                        <Route path='/login'>
                           <Login />
                        </Route>
                        <Route exact path='/' >
                           <Home />
                        </Route>
                        <Route path="*" component={PageNotFound} />
                     </Switch>
                  </GridSection>
               </Container>
            </LeftMenu>
         </Router>
      </ContextDataProvider>
   );
}

export default App;
