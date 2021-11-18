import React from 'react'
import './cart-item.styles.scss'



const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <div className='footer'>
                <span className='price'>{quantity} x ${price}</span>
                
                <span className='item-total'>${quantity * price}</span>
            </div>
            
            
        </div>
    </div>
);

export default CartItem;