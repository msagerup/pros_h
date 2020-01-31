import React, {useContext} from 'react'
import { AppContextData } from '../../Context/ContextData'

import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import menuImg from './img/menu.jpg'
import { Button, Card, Image} from 'semantic-ui-react'
// Comp
import MenuLoader from '../Loaders/MenuLoader'

const SecondStepContainer = styled.section`
   grid-column: 2/4;
   padding-top: 60px;
`

export default function SecondStep() {
   let history = useHistory()
   const {updateStepper} = useContext(AppContextData)
   return (
      <>
         <SecondStepContainer>
            <Card fluid>
               <Image src={menuImg} size="large" />
               <Card.Content>
                  <Card.Header>Hei [navn fra db] da er vi litt bedre kjendt!</Card.Header>
                  <Card.Meta>[Det er mulig å bestille] [Det er ikke mulig å bestille]</Card.Meta>
                  <Card.Description>
                     <h3>Nedefor finner du menyen fra [Hotell navn] </h3>
                     <p>Dette er super enkelt, du markere hva du har lyst på, så trykker du på knappen for å komme videre til bekreftelse siden.</p>
                     </Card.Description>
                     <MenuLoader />
                     <Button onClick={() => {
                        history.push('/login/2')
                        updateStepper(2)
                        
                     } }>Neste</Button>
                  
               </Card.Content>
            </Card>
         </SecondStepContainer>
      </>
   )
}
