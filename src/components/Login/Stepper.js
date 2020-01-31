import React, {useContext, useState} from 'react'
import { Step } from 'semantic-ui-react'
import { AppContextData } from '../../Context/ContextData'


export default function Stepper(props) {
   const {activeStepper, updateStepper } = useContext(AppContextData);
   return (
      <>
         <Step.Group fluid  size='mini'>
            <Step
               completed={false}
               active={activeStepper === 0}
               onClick={() => updateStepper(0)}
               link
            >
               <Step.Content>
                  <Step.Title>RomService kode</Step.Title>
                  <Step.Description>Fyll inn din rom id, eller scan QR bilde</Step.Description>
               </Step.Content>
            </Step>

            <Step
               active={activeStepper === 1}
               onClick={() => updateStepper(1)}
               disabled={activeStepper < 1}
               link

            >
               <Step.Content>
                  <Step.Title>Meny</Step.Title>
                  <Step.Description>Hva frister?</Step.Description>
               </Step.Content>
            </Step>

            <Step
               disabled={activeStepper < 2}
               onClick={() => updateStepper(2)}
               active={activeStepper === 2}
               link
            >
               <Step.Content>
                  <Step.Title>Fullfør</Step.Title>
                  <Step.Description>Snart banker det på døren...</Step.Description>

               </Step.Content>
            </Step>
         </Step.Group>
      </>
   )
}
