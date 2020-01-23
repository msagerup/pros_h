import React from 'react';
import NavBar from './components/NavBar'
import HooksPlay from './components/HooksPlay'
import Test from './components/Test'
import Pris from './components/Pris'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';

function App() {


    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/test"> 
                    <Test />
                </Route>
                <Route path='/pris/:produktId'>
                    <Pris />
                </Route>
                <Route path='/hooks' >
                    <HooksPlay />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
