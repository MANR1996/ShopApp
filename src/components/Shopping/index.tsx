import React, { useState } from 'react';
import './index.css';
import OrderSummary from './components/OrderSummary';
import Cart from './components/Cart';
// import BlankPhoto from './resources/images/Photo.png';
import TShirt from './resources/images/image 4.png';
import Boxes from './resources/images/image 9.png';
import Bottle from './resources/images/image 10.png';
// import All from './resources/images/All.png';

function Shopping() {

    const [cartItems, setCartItems] = useState<{ qty: number; price: number; name: string; image: string; pack: { name: string; description: string; }[] }[]>([
        {
            name: 'My Christmas pack',
            qty: 50,
            price: 71.20,
            pack: [
                {
                    name: 'Cardboard box:  ',
                    description: '(container)'
                },
                {
                    name: 'Unisex Short Sleeve T-Shirt ',
                    description: '(Green, Small)'
                },
                {
                    name: 'Basic bottle ',
                    description: '(Blue)'
                }
            ],
            image: Boxes
        },
        {
            name: 'Basic T-Shirt',
            qty: 10,
            price: 13.50,
            pack: [],
            image: TShirt
        },
        {
            name: 'Woman bottle',
            qty: 20,
            price: 36.50,
            pack: [],
            image: Bottle
        },
    ]);

    function editQty(itemName: string, event: any) {
        let newState = Object.create(cartItems);
        newState.filter((cartItem: { name: string; }) => cartItem.name === itemName)[0].qty = event.target.value;
        setCartItems(newState);
    }

    function removeItem(itemName: string) {
        let newState = cartItems.filter((cartItem: { name: string; }) => cartItem.name !== itemName);
        setCartItems(newState);
    }

    function totalPrice() {
        let total = 0;
        cartItems.map(item => (
            total = total + item.price * item.qty
        ));
        return total
    }

    return (
        <div className='shopping'>
            <Cart cartItems={cartItems} editQty={editQty} removeItem={removeItem} />
            <OrderSummary totalPrice={totalPrice()} itemsQty={cartItems.length} />
        </div>
    );
}

export default Shopping;