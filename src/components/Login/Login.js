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

export default function Login() {
   return (
      <>
         <Router>
            <StatusBar>
               <Stepper />
               
            </StatusBar>
            <Switch>
            <Route exact path='/login/0'>
                  <FirstStep />
               </Route>
<<<<<<< HEAD
               <Route path='/login/1'>
                  <SecondStep />
               </Route>
               <Route path='/login/2'>
=======
               <Route path='/login/menu/:code'>
                  <SecondStep />
               </Route>
               <Route path='/login/done/:code'>
>>>>>>> 50677562490f044afd81ff8ce2e5f833288fe937
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
