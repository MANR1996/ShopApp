import React from 'react';
import './index.css';

import Logo from './components/Logo'
import Search from './components/Search'
import SignNCart from './components/SignNCart'

function Header() {
    return (
        <header className="Header">
            <Logo />
            <Search />
            <SignNCart />
        </header>
    );
}

export default Header;