import React, {useContext} from 'react'
import { Step } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

import { AppContextData } from '../../Context/ContextData'


export default function Stepper(props) {
   const {activeStepper, updateStepper } = useContext(AppContextData);
   let history = useHistory()

   // Update active click element, and route to correct view.
   function handleClick (step) {
      updateStepper(step)
      history.push(`/login/${step}`)

   }
   

   return (
      <>
         <Step.Group fluid  size='mini'>
            <Step
               completed={false}
               active={activeStepper === 0}
               onClick={() => handleClick(0)}
               link
            >
               <Step.Content>
                  <Step.Title>RomService kode</Step.Title>
                  <Step.Description>Fyll inn din rom id, eller scan QR bilde</Step.Description>
               </Step.Content>
            </Step>

            <Step
               active={activeStepper === 1}
               onClick={() => handleClick(1)}
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
               onClick={() => handleClick(2)}
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
