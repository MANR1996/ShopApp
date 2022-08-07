import React from 'react';
import './index.css';
import OrderSummary from './components/OrderSummary';
import Cart from './components/Cart';
import BlankPhoto from './resources/images/Photo.png';
import All from './resources/images/All.png';

function Shopping() {
    const cartItems = [
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
            photo: All
        },
        {
            name: 'Basic T-Shirt',
            qty: 10,
            price: 13.50,
            pack: [],
            photo: BlankPhoto
        },
        {
            name: 'Woman bottle',
            qty: 20,
            price: 36.50,
            pack: [],
            photo: BlankPhoto
        },
    ]

    function totalPrice() {
        let total = 0;
        cartItems.map(item => {
            total=total+item.price*item.qty;
        });
        return total
    }

    return (
        <div className="Shopping">
            <Cart cartItems={cartItems} />
            <OrderSummary totalPrice={totalPrice()} itemsQty={cartItems.length} />
        </div>
    );
}

export default Shopping;