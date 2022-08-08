import React from 'react';
import './index.css';
import MenuItem from './components/MenuItem';

function Menu() {

    const menuItems=['All products','Packaging','Drinkware','Apparel','Notebooks','Backpacks']

    return (
        <nav className='menu'>
            {menuItems.map((item,index)=>(<MenuItem item={item} key={index} />))}
        </nav>
    );
}

export default Menu;