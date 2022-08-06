import React from 'react';
import './index.css';
import MenuItem from './components/MenuItem';

function Menu() {

    const menuItems=['All products','Packaging','Drinkware','Apparel','Notebooks','Backpacks']

    return (
        <ul className="Menu">
            {menuItems.map((item,index)=>(<MenuItem item={item} key={index} />))}
        </ul>
    );
}

export default Menu;