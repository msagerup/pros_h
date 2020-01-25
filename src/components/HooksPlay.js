import React, { useState, useEffect } from 'react'
import PasstheState from './PassTheState'


export default function HooksPlay() {
    const [count, test] = useState(10)
    const [fruit, setFruit] = useState('Bannan')
    const [message, setMessage] = useState(null)
    
    // useEffect(() => console.log(count))
   
    function handleFruit() {
        setFruit('Epple')
        // document.title = `the fruit is ${fruit}`
    }

    useEffect(() => {
        document.title = fruit
    })

    function handleChange (navn) {
        console.log(`hello ${navn}`)
    }

    return (
        <>
            <p>You clicked state {count} times</p>
            <p>This is the current fruit {fruit}</p>
            <p>This is message: {message}</p>
            <button onClick={() => test(count + 1)}>Click</button>
            <button onClick={() => test(`<h2>Hello</h2>`)}>Change to</button>
            <button onClick={() => handleFruit()}>Change fruit nam,e</button>
            <PasstheState passBack = {handleChange} propText = 'hei' textState = {setMessage}/>
        </>
    )
}
