import React from 'react'
import './header.css'
function Header() {
    return (
        <header>
            <div className="logo">Maru</div>
            <ul className='menu'>
                <li>Trending</li>
                <li>OST</li>
                <li>Movies</li>
            </ul>
            <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </header>
    )
}

export default Header