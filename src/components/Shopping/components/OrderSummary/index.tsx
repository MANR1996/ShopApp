import React from 'react';
import './index.css';


type MyProps = {
    totalPrice: number;
    itemsQty: number;
}

function OrderSummary({ totalPrice, itemsQty }: MyProps) {
    return (
        <div className="OrderSummary">
            <div className="title">Order Summary</div>
            <div className="number-items"><span>Number of items</span><span className="items-qty">{itemsQty}</span></div>
            <div className="division-line"></div>
            <div className="total-price"><span>Total:</span><span className="price">${totalPrice}</span></div>
            <div className="buy-btns">
                <div className="checkout">Proceed to Checkout</div>
                <div className="continue">Continue shopping</div>
            </div>
        </div>
    );
}

export default OrderSummary;