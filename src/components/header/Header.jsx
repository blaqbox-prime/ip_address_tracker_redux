import React, {useState} from 'react'
import './Header.css'

function Header() {

    const [input, setInput] = useState('');

  return (
    <header className="Header">
        <h1 className="Header__title" id="Header__title">IP Address Tracker</h1>
        <form className="Header__form">
            <input type="text" className="Header__search_input" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="Header__search_button"><img src="./images/icon-arrow.svg" alt="search" /></button>
        </form>
    </header>
  )
}

export default Header