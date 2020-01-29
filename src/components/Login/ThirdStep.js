import React from 'react'
import { Button, Card, Image, Form } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import doneImg from './img/done.jpg'

const ThirdStepContainer = styled.section`
   grid-column: 2/4;
   padding-top: 60px;
`

export default function ThirdStep() {
   return (
      <>
         <ThirdStepContainer>
            <Card fluid>
               <Image src={doneImg} size="large" />
               <Card.Content>
                  <Card.Header>Hei [navn fra db] da er vi litt bedre kjendt!</Card.Header>
                  <Card.Meta>[Det er mulig å bestille] [Det er ikke mulig å bestille]</Card.Meta>
                  <Card.Description>
                     <h3>Nedefor finner du menyen fra [Hotell navn] </h3>
                     <p>Dette er super enkelt, du markere hva du har lyst på, så trykker du på knappen for å komme videre til bekreftelse siden.</p>
                  </Card.Description>
               </Card.Content>
            </Card>
         </ThirdStepContainer>
      </>
   )
}
