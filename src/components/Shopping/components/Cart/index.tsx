import React from 'react';
import './index.css';
import CartItem from './components/CartItem';

type MyProps = {
    cartItems: { qty: number; price: number; name: string; image: string; pack: { name: string; description: string; }[] }[];
    editQty: (itemName: string, event: any) => void;
    removeItem: (itemName: string) => void;
}

function Cart({cartItems,editQty, removeItem}: MyProps) {

    return (
        <div className='cart'>
            <div className='title'>Your cart <span>({cartItems.length})</span></div>
            {cartItems.length>0?(
                <ul>
                {cartItems.map((item: { qty: number; price: number; name: string; image: string; pack: { name: string; description: string; }[] },index) => (<CartItem item={item} editQty={editQty} removeItem={removeItem} key={index} />))}
            </ul>
            ):(
                <div className='empty-cart'>Your cart is empty, please add products</div>
            )}
        </div>
    );
}

export default Cart;