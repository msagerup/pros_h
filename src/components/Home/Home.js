import React from 'react'
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

const GridSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    padding-top: 50px;
`

export default function Home() {
    return (
        <>
            
                <div className="one">one</div>
                <div className="two">two</div>
                <div className="three">three</div>
                <div className="four">four</div>
        
        </>
       
    )
}
