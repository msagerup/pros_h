import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import Login from '../Login/Login'
import { AppContextData } from '../../Context/ContextData'
import Paper from '@material-ui/core/Paper';
import { Button } from 'semantic-ui-react';


import styled from 'styled-components';

const Header = styled.header`
   grid-column: 2/4;
`
const SectionCallToAction = styled.section`
   margin: 30px 0px 30px 0px;
   grid-column: 2/4;

`


export default function Home() {
   let history = useHistory();
   // const { toggleLogInnProcess, startLoginProcess } = useContext(AppContextData);


   return (
      <>
         <Header>
            <Paper style={{ padding: '40px' }}>

               <h1>RoomService i din lomme</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas praesentium similique numquam nam ullam enim, iure suscipit itaque doloribus quis debitis harum voluptate dignissimos odio aliquam ducimus voluptates corrupti labore qui quibusdam! Reprehenderit expedita tempora repudiandae laudantium sed commodi non perferendis optio ullam quasi.</p>

            </Paper>
         </Header>
         <SectionCallToAction>
            <Paper style={{ padding: '40px' }}>
               <h3>Logg inn!</h3>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto totam perspiciatis aliquam voluptas, neque doloribus nam doloremque unde omnis sed porro temporibus commodi, aspernatur error eveniet nulla at cupiditate numquam assumenda autem facilis? Nihil in voluptatibus quibusdam mollitia doloribus?</p>
               <Button onClick={() => history.push('/login')}>Logg In</Button>

            </Paper>
         </SectionCallToAction>
      </>

   )
}
