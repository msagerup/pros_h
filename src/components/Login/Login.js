import React, { useState } from 'react'
import { Step } from 'semantic-ui-react'
import styled from 'styled-components';
import FirstStep from './FirstStep'


const StatusBar = styled.div`
   grid-column: 1/5;

`

export default function Login() {
   return (
      <>
         <StatusBar>
            <Step.Group fluid unstackable size='small'>
               <Step
                  completed={false}
                  active={true}

               >
                  <Step.Content>
                     <Step.Title>RomService kode</Step.Title>
                     <Step.Description>Fyll inn din rom id, eller scan QR bilde</Step.Description>
                  </Step.Content>
               </Step>

               <Step
                  completed={false}
                  active={false}
                  disabled={true}
               >
                  <Step.Content>
                     <Step.Title>Meny</Step.Title>
                     <Step.Description>Hva frister?</Step.Description>
                  </Step.Content>
               </Step>

               <Step
                  completed={false}
                  active={false}
                  disabled={true}
               >
                  <Step.Content>
                     <Step.Title>Fullfør</Step.Title>
                     <Step.Description>Snart banker det på døren...</Step.Description>

                  </Step.Content>
               </Step>
            </Step.Group>
         </StatusBar>
         <FirstStep />
      </>
   )
}
