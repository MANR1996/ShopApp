import React from 'react';
import './index.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

type MyProps = {
    item: { qty: number; price: number; name: string; photo: string; pack: { name: string; description: string; }[] };
    editQty: (itemName: string, event: any) => void;
    removeItem: (itemName: string) => void;
}

function CartItem({ item, editQty, removeItem }: MyProps) {

    return (
        <li key={item.name}>
            <div className='cart-item'>
                <div className='product-photo'>
                    <div className='photo-content'>
                        <img src={item.photo} alt={item.name + '-photo'} />
                    </div>
                    {/* <img width='120px' height='120px' src={item.photo} alt={item.name + '-photo'} /> */}
                    {item.pack.length > 0 && (
                        <div className='pack-mark'>PACK</div>
                    )}
                </div>
                <div className='product-description'>
                    <div className='product-name'>{item.name}</div>
                    <div className='product-qty'>Quantity:
                        <select value={item.qty} onChange={(event) => editQty(item.name, event)}>
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='40'>40</option>
                            <option value='50'>50</option>
                        </select></div>
                    <div className='product-pack'>
                        <ul>
                            {item.pack.map((i: { name: string; description: string; }) => (<li><span className='list-point'>•</span>{i.name} <span className='product-description'>{i.description}</span></li>))}
                        </ul>
                    </div>
                    <div className='product-actions'>
                        {item.pack.length > 0 ? (
                            <ButtonGroup variant="text" aria-label="text button group">
                                <Button className='actions-edit'>Edit pack</Button>
                                <Button className='actions-remove' onClick={() => removeItem(item.name)}>Remove</Button>
                            </ButtonGroup>
                        ) : (
                            <div className='actions-single' onClick={() => removeItem(item.name)} >
                                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M7 7H5V13H7V7Z' fill='#091625' />
                                    <path d='M11 7H9V13H11V7Z' fill='#091625' />
                                    <path d='M12 1C12 0.4 11.6 0 11 0H5C4.4 0 4 0.4 4 1V3H0V5H1V15C1 15.6 1.4 16 2 16H14C14.6 16 15 15.6 15 15V5H16V3H12V1ZM6 2H10V3H6V2ZM13 5V14H3V5H13Z' fill='#091625' />
                                </svg>
                                <div className='actions-remove'>Remove</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='product-price'>
                    <div className='unit-price'>${item.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</div>
                    <div className='total-price'>Total: ${(item.price * item.qty).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</div>
                </div>
            </div>
        </li>
    );
}

export default CartItem;