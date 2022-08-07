import React from 'react';
import './index.css';

type MyProps = {
    item: {
        name: string;
        priceRange: string;
        mnmQty: number;
        photo: string;
    };
}

function CartItem({ item }: MyProps) {
    return (
        <div className="item-cart">
            <div className="item-photo">
                <img width='336px' height='336px' src={item.photo} alt={item.name + '-photo'} />
            </div>
            <div className="item-name">
                {item.name}
            </div>
            <div className="item-price-qty">
                <div className="item-price">
                    {item.priceRange}
                </div>
                <div className="item-qty">
                    Minimum: <span>{item.mnmQty}</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;