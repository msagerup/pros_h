import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';

import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const RightMenu = (props) => {
    const [menu, setMenu] = useState(false)
    console.log(menu)
    return (
        <section style={{height: '60vh', paddingTop: '20px'}}>
     <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='slide along'
        icon='labeled'
        inverted
        // onHide={() => setVisible(false)}
        vertical
        visible={menu}
        width='thin'
      >
        <Menu.Item>
          <Icon name='home' />
          <Link to="/pris">Pris</Link>
          </Menu.Item>
        <Menu.Item >
          <Icon name='clipboard outline' />
          <Link to="/hooks">Hooks</Link>
          Games
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
 
            <button onClick={() => setMenu(!menu)}>hello</button>
        </section>
    )
}




export default RightMenu;