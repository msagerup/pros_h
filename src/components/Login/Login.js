import React, { useState } from 'react'
import { Step } from 'semantic-ui-react'
import styled from 'styled-components';
import Stepper from './Stepper'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';


import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";

const StatusBar = styled.div`
   grid-column: 1/5;

`

export default function Login(props) {
   console.log(props)
   return (
      <>
         <Router>
            <StatusBar>
               <Stepper />
            </StatusBar>
            <Switch>
            <Route exact path='/login/'>
                  <FirstStep />
               </Route>
               <Route path='/login/menu'>
                  <SecondStep />
               </Route>
               <Route path='/login/done'>
                  <ThirdStep />
               </Route>
            </Switch>
            <StatusBar style={{margin: '60px 0px 60px 0px'}}>
               <Stepper />
            </StatusBar>
         </Router>

      </>
   )
}
