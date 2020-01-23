import React, {useEffect} from 'react'

import { Button } from 'semantic-ui-react'


export default function PassTheState(props) {
    console.log(props.passBack)

    useEffect(() => {
        props.textState('jjjjjjjjjjjjj')
    })

    return (
        <>
           <button onClick={() => props.passBack('jhdfdjksfh')}> Knapp i PassTheState comp </button>
           {/* <button onClick={() => props.textState('neeeeeeeeew')}>Knapp update state</button> */}
           <Button>Click</Button>
           <button class="ui button">Click Here</button>
           <button class="ui button">Show Modal</button>
           
        </>
    )
}
