import React from 'react';
import './index.css';
import CartItem from './components/CartItem';

type MyProps = {
    cartItems: { [key: string]: any };
    editQty: any;
    removeItem: any;
}

function Cart({cartItems,editQty, removeItem}: MyProps) {

    return (
        <div className="Cart">
            <div className='title'>Your cart <span>({cartItems.length})</span></div>
            <ul>
                {cartItems.map((item: { [key: string]: any; }) => (<CartItem item={item} editQty={editQty} removeItem={removeItem} />))}
            </ul>
        </div>
    );
}

export default Cart;