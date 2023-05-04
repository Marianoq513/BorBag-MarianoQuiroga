import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
        <h1>BorBag</h1>
        <nav>
            <ul>
                <li>Zapatos</li>
                <li>Mochilas</li>
                <li>Carteras</li>
            </ul>
        </nav>
        <CardWidget />
    </header>
  )
}

export default NavBar