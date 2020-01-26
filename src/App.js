import React from 'react';
import NavBar from './components/NavBar/NavBar';
import LeftMenu from './components/Menu/LeftMenu';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import HooksPlay from './components/HooksPlay';
import Home from './components/Home/Home';
import Pris from './components/Pris';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';

//Css grid styling
const GridSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    padding-top: 50px;
`


function App() {
    return (
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
                        <Route exact path='/' >
                            <Home />
                        </Route>
                    </Switch>
                </GridSection>
                </Container>
            </LeftMenu>
        </Router>
    );
}

export default App;
