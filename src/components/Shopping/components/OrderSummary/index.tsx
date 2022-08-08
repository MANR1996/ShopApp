import React from 'react';
import './index.css';
import Button from '@mui/material/Button';


type MyProps = {
    totalPrice: number;
    itemsQty: number;
}

function OrderSummary({ totalPrice, itemsQty }: MyProps) {
    return (
        <div className='order-summary'>
            <div className='title'>Order Summary</div>
            <div className='number-items'><span>Number of items</span><span className='items-qty'>{itemsQty}</span></div>
            <div className='division-line'></div>
            <div className='total-price'><span>Total:</span><span className='price'>${totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span></div>
            <div className='buy-btns'>
                <Button className='checkout' variant="contained">Proceed to Checkout</Button>
                <Button  className='continue' variant="outlined">Continue shopping</Button>
                {/* <div className='checkout'>Proceed to Checkout</div>
                <div className='continue'>Continue shopping</div> */}
            </div>
        </div>
    );
}

export default OrderSummary;