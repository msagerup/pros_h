import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pris(props) {
    let { produktId } = useParams();
    console.log(props.match)
   
    return (
        <>
            abc: {produktId}
        </>
    )
}
