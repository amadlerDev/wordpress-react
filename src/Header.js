import React from 'react';
import logo from './assets/מקור_ראשון_לוגו-removebg-preview.png'
import svg from './assets/9522043_search_icon.svg'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <img src={svg} alt="search icon" />
        </header>
    );
} 