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
        <div className='cart'>
            <div className='title'>Your cart <span>({cartItems.length})</span></div>
            {cartItems.length>0?(
                <ul>
                {cartItems.map((item: { [key: string]: any; }) => (<CartItem item={item} editQty={editQty} removeItem={removeItem} />))}
            </ul>
            ):(
                <div className='empty-cart'>Your cart is empty, please add products</div>
            )}
        </div>
    );
}

export default Cart;