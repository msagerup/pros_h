import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pris() {
    let { abc } = useParams();
    return (
        <div>
            abc: {abc}
        </div>
    )
}
