import React from 'react';
import './index.css';
import CartItem from './components/CartItem';

type MyProps = {
    cartItems: { [key: string]: any };
}

function Cart({cartItems}: MyProps) {

    return (
        <div className="Cart">
            <div className='title'>Your cart <span>({cartItems.length})</span></div>
            <ul>
                {cartItems.map((item: { [key: string]: any; }) => (<CartItem item={item} />))}
            </ul>
        </div>
    );
}

export default Cart;