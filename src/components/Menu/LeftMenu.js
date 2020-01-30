import React, {  useState, useContext } from 'react'
import {AppContextData} from '../../Context/ContextData'
import { Link } from 'react-router-dom';

import {
   Icon,
   Menu,
   Segment,
   Sidebar,
} from 'semantic-ui-react'

const LeftMenu = (props) => {
   const {menuOpen} = useContext(AppContextData)

   return (
      <section style={{ paddingTop: '15px' }}>
         <Sidebar.Pushable as={Segment}>
            <Sidebar
               as={Menu}
               animation='slide along'
               icon='labeled'
               inverted
               // onHide={() => setVisible(false)}
               vertical
               visible={menuOpen}
               width='thin'
            >
               <Menu.Item>
                  <Link to="/">
                     <Icon name='home' />
                     Hjem
                  </Link>
               </Menu.Item>
               <Menu.Item >
                  <Icon name='clipboard outline' />
                  <Link to="/hooks">Hooks
                  </Link>
                  
        </Menu.Item>
               <Menu.Item >
                  <Icon name='camera' />
                  Channels
        </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
               {props.children}
            </Sidebar.Pusher>
         </Sidebar.Pushable>
      </section>
   )
}




export default LeftMenu;