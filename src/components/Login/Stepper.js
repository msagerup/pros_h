import React, {useContext} from 'react'
import { Step } from 'semantic-ui-react'


export default function Stepper() {
   return (
      <>
         <Step.Group fluid  size='mini'>
            <Step
               completed={false}
               active={true}
               // title = 'first-step'
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
      </>
   )
}
