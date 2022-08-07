import React from 'react';
import './index.css';
import CartItem from './components/CartItem';
import BlankPhoto from './resources/images/Photo.png';

const cartItmes = [
    {
        name: 'Unisex Short Sleeve T-Shirt',
        priceRange: '$10 - $24',
        mnmQty: 24,
        photo: BlankPhoto
    },
    {
        name: 'Unisex Short Sleeve T-Shirt',
        priceRange: '$10 - $24',
        mnmQty: 24,
        photo: BlankPhoto
    },
    {
        name: 'Unisex Short Sleeve T-Shirt',
        priceRange: '$10 - $24',
        mnmQty: 24,
        photo: BlankPhoto
    },
    {
        name: 'Unisex Short Sleeve T-Shirt',
        priceRange: '$10 - $24',
        mnmQty: 24,
        photo: BlankPhoto
    },
]

function AlsoLike() {
    return (
        <div className="AlsoLike">
            <div className="title">
                You might also like
            </div>
            <div className="also-like-cart">
                {cartItmes.map(item => (<CartItem item={item} />))}
            </div>
        </div>
    );
}

export default AlsoLike;