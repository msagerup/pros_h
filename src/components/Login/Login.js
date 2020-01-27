import React from 'react'
import { Step } from 'semantic-ui-react'
import styled from 'styled-components';
import FirstStep from './FirstStep'


const StatusBar = styled.div`
   grid-column: 1/5;

`

export default function Login() {
   return (

      <StatusBar>
         <Step.Group fluid unstackable size='small'>
            <Step
               completed={false}
               active={true}
               
            >
               <Step.Content>
                  <Step.Title>Shipping</Step.Title>
                  <Step.Description>Choose your shipping options</Step.Description>
               </Step.Content>
            </Step>

            <Step
               completed={false}
               active={false}
               disabled={true}
            >
               <Step.Content>
                  <Step.Title>Billing</Step.Title>
                  <Step.Description>Enter billing information</Step.Description>
               </Step.Content>
            </Step>

            <Step
               completed={false}
               active={false}
               disabled={true}
            >
               <Step.Content>
                  <Step.Title>Confirm Order</Step.Title>
               </Step.Content>
            </Step>
         </Step.Group>
         <FirstStep />
      </StatusBar>
   )
}
