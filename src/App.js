import React from 'react';
import { ContextDataProvider } from './Context/ContextData';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import NavBar from './components/NavBar/NavBar';
import LeftMenu from './components/Menu/LeftMenu';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import HooksPlay from './components/HooksPlay';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Pris from './components/Pris';
import PlayPin from './components/PlayPin'
import PageNotFound from './components/404/PageNotFount'
import './App.css';


import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";

//Css grid styling
const GridSection = styled.section`
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: auto;
    padding-top: 50px;
    @media (max-width:480px) {
      grid-template-columns: 1fr;

    }
`

function App() {
   return (
      <ContextDataProvider>
         <Router>
            <NavBar />
            <LeftMenu>
               <Container>
                  <GridSection>
                     <Switch>
                        <Route path='/pris/:produktId'>
                           <Pris />
                        </Route>
                        <Route path='/hooks' >
                           <HooksPlay />
                        </Route>
                        <Route path='/play'>
                           <PlayPin />
                        </Route>
                        <Route path='/login'>
                           <Login />
                        </Route>
                        <Route exact path='/' >
                           <Home />
                        </Route>
                        <Route path="*" component={PageNotFound} />
                     </Switch>
                  </GridSection>
               </Container>
            </LeftMenu>
            <Footer
               theme ="light"
               columns={[
                  {
                    title: '相关资源',
                    items: [
                      {
                        title: 'Ant Design Pro',
                        url: 'https://pro.ant.design/',
                        openExternal: true,
                      },
                      {
                        title: 'Ant Design Mobile',
                        url: 'https://mobile.ant.design/',
                        openExternal: true,
                      },
                      {
                        title: 'Kitchen',
                        url: 'https://kitchen.alipay.com/',
                        description: 'Sketch 工具集',
                      },
                    ],
                  },
                  {
                    title: '社区',
                    items: [
                      {
                        title: 'Ant Design Pro',
                        url: 'https://pro.ant.design/',
                        openExternal: true,
                      },
                      {
                        title: 'Ant Design Mobile',
                        url: 'https://mobile.ant.design/',
                        openExternal: true,
                      },
                      {
                        title: 'Kitchen',
                        url: 'https://kitchen.alipay.com/',
                        description: 'Sketch 工具集',
                      }
                    ]
                  }
               ]}
               
            />
         </Router>
      </ContextDataProvider>
   );
}

export default App;
