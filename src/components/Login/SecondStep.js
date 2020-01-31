import React, { useContext, useEffect } from 'react'
import { AppContextData } from '../../Context/ContextData'

import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import menuImg from './img/menu.jpg'
import { Button, Card, Image } from 'semantic-ui-react'
// Comp
import MenuLoader from '../Loaders/MenuLoader'

const SecondStepContainer = styled.section`
   grid-column: 2/4;
   padding-top: 60px;
`

export default function SecondStep() {
   let history = useHistory()
   // Use params to access user-code on backend.
   let { code } = useParams()
   const { updateStepper, savePersonAndMenuInfo, menuAndPersonInfo, testdata } = useContext(AppContextData)


   console.log(menuAndPersonInfo.hotel)

   // Get route to backend, gets meny and person info
   useEffect(() => {
      async function getData() {
         try {
            const response = await fetch(`http://localhost:5000/api/order/${code}`);
            const json = await response.json();
            // //Sett info to state
            savePersonAndMenuInfo(json)
            // console.log(json)
         } catch (err) {
            console.log(err)
         }
      }
      getData();
   }, [code])

   
   return (
      <>
         <SecondStepContainer>
            <Card fluid>
               <Image src={menuImg} size="large" />
               <Card.Content>
                  <Card.Header> 
                     {menuAndPersonInfo ? (
                        `Hei ${menuAndPersonInfo.person.reference} `
                     ) : (
                        'Beklager, det har skjedd noe feil ved lasting av data'
                     )
                  }
                      da er vi litt bedre kjendt!</Card.Header>
                  <Card.Meta>[Det er mulig å bestille] [Det er ikke mulig å bestille]</Card.Meta>
                  <Card.Description>
                     <h3>Nedefor finner du menyen fra [Hotell navn] </h3>
                     <p>Dette er super enkelt, du markere hva du har lyst på, så trykker du på knappen for å komme videre til bekreftelse siden.</p>
<<<<<<< HEAD
                     </Card.Description>
                     <MenuLoader />
                     <Button onClick={() => {
                        history.push('/login/2')
                        updateStepper(2)
                        
                     } }>Neste</Button>
                  
=======
                  </Card.Description>
                  <MenuLoader />
                  <Button onClick={() => {
                     history.push('/login/done')
                     updateStepper(2)

                  }}>Neste</Button>

>>>>>>> 50677562490f044afd81ff8ce2e5f833288fe937
               </Card.Content>
            </Card>
         </SecondStepContainer>
      </>
   )
}
