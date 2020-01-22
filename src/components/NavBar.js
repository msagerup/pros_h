import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/test'>Test</Link>
                </li>
                <li>
                    <Link to='/pris'>Pris</Link>
                </li>
            </ul>

        </div>
    )
}
