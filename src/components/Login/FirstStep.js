import React, { useContext } from 'react'
import { Button, Card, Image, Form } from 'semantic-ui-react'
import { useHistory} from "react-router-dom";
import { AppContextData } from '../../Context/ContextData'
import styled from 'styled-components';
import firstStepImg from './img/firstStep.jpg'
import eat from './img/eat.jpg'

const FirsStepContainer = styled.section`
   grid-column: 2/4;
   padding-top: 60px;
`

export default function FirstStep() {
   let history = useHistory()
   const {updateStepper} = useContext(AppContextData)


   // Form handeler
   function handleForm() {

   }

   return (
      <FirsStepContainer>
         <Card fluid>
            <Image src={eat} size="large" wrapped ui={false} />
            <Card.Content>
               <Card.Header>Du er kun 3 steg fra at det banker på døren!</Card.Header>
               <Card.Meta>[Grand Hotel Oslo]</Card.Meta>
               <Card.Description>
                  <h3>Første steg blir å skrive inn koden.</h3>
                  <p>Du finner koden på bordet i dit rom, du skulle også fått denne ved insjekking. Vennligst skriv inn denne koden i feltet nedenfor og trykk så på knappen for å komme til menyen</p>
                  <Form style={{padding: '30px 0px 30px 0px'}}>
                     <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        label='Kode'
                        onClick={handleForm}
                        placeholder='Skriv inn koden din her'
                        id='form-input-first-name'
                     />
                  </Form>
                  <Button onClick={() => {
                     history.push('/login/menu')
                     updateStepper(1)
                  }
                  }>Neste</Button>
               </Card.Description>
            </Card.Content>
         </Card>
      </FirsStepContainer>
   )
}
