import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import styled from 'styled-components';

const FirsStepContainer = styled.section`
   grid-column: 2/4;
   padding-top: 60px;
`

export default class FirstStep extends Component {
   render() {
      return (
         <FirsStepContainer>
         <Form success>
            <Form.Input label='RomService Kode' placeholder='4  siffret kode' />
            <Message
               success
               header='Riktig Kode!'
               content="Trykk neste for å se meny valg ved [ insert hotel name logic ] "

            />
            <Button onClick={() => console.log('this needs to go somewhere...')}>Neste</Button>
         </Form>
         </FirsStepContainer>
      )
   }
}
