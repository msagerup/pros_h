import React, { Component, useState } from 'react'
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
        <section style={{height: '100vh'}}>
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
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
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