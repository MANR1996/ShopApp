import React from 'react';
import './index.css';

// interface CartItem {
//     name: string;
//     qty: number;
//     pack: Array<string>;
// }



type MyProps = {
    item: { [key: string]: any };
}

function CartItem({ item }: MyProps) {

    return (
        <li key={item.name}>
            <div className="CartItem">
                <div className="Product-photo">
                    <img width='120px' height='120px' src={item.photo} alt={item.name + '-photo'} />
                    {item.pack.length > 0 && (
                        <div className="pack-mark">PACK</div>
                    )}
                </div>
                <div className="Product-description">
                    <div className="Product-name">{item.name}</div>
                    <div className="Product-qty">Quantity: {item.qty}</div>
                    <div className="Product-pack">
                        <ul>
                            {item.pack.map((i: { name: string; description: string; }) => (<li><span className='list-point'>•</span>{i.name} <span className='product-description'>{i.description}</span></li>))}
                        </ul>
                    </div>
                    <div className="Product-actions">
                        {item.pack.length > 0 ? (
                            <div className="actions-pack">
                                <div className="actions-edit">Edit pack</div>
                                <div className="actions-remove">Remove</div>
                            </div>
                        ) : (
                            <div className="actions-single">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7H5V13H7V7Z" fill="#091625" />
                                    <path d="M11 7H9V13H11V7Z" fill="#091625" />
                                    <path d="M12 1C12 0.4 11.6 0 11 0H5C4.4 0 4 0.4 4 1V3H0V5H1V15C1 15.6 1.4 16 2 16H14C14.6 16 15 15.6 15 15V5H16V3H12V1ZM6 2H10V3H6V2ZM13 5V14H3V5H13Z" fill="#091625" />
                                </svg>
                                <div className="actions-remove">Remove</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="Product-price">
                    <div className="unit-price">${item.price}</div>
                    <div className="total-price">Total: ${item.price * item.qty}</div>
                </div>
            </div>
        </li>
    );
}

export default CartItem;