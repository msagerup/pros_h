import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { AppContextData } from '../../Context/ContextData'

import styled from 'styled-components';
import { Card, Image, Button } from 'semantic-ui-react'
// LazyLoader
import LazyLoad from 'react-lazyload';

//images
import hotelStreet from './img/hotelStreet.jpg'
import hotelDay from './img/hotelDay.jpg'
import hotelNight from './img/hotelNight.jpg'



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
            <Card fluid>
               {/* Does lazyload work ? */}
               <LazyLoad height={200}>
                  <Image src={hotelStreet} wrapped ui={false} />
               </LazyLoad>
               <Card.Content>
                  <Card.Header>Velkommen! Håper du får et flott opphold ved ditt hotell.</Card.Header>
                  <Card.Meta>[Grand Hotel Oslo]</Card.Meta>
                  <Card.Description>
                     <h3>PalmBar er en brukervennlig måte du nå kan bestille roomservice til ditt hotelroom. Ved 3 enkle steg er du igang. Alt du trenger er login kode for å begynne</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, consequatur obcaecati quae exercitationem ullam, magni eveniet sequi commodi corporis eos alias! Blanditiis esse deleniti, illum, repellat quo assumenda laudantium amet vel sit eveniet maxime, dicta nisi nihil quia neque quisquam!</p>
                  </Card.Description>
               </Card.Content>
            </Card>
         </Header>


         <SectionCallToAction>
            <Card fluid>
               <Image src={hotelDay} wrapped ui={false} />
               <Card.Content>
                  <Card.Header>Bestill roomService!</Card.Header>
                  <Card.Meta>[Room Service er tillgnenelig for ditt hotell]</Card.Meta>
                  <Card.Description>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae doloribus possimus vitae, adipisci incidunt repellat minima deserunt exercitationem nesciunt?</p>
                     <Button onClick={() => history.push('/login')}>Bestill nå</Button>
                  </Card.Description>
               </Card.Content>
            </Card>
         </SectionCallToAction>

      </>

   )
}
