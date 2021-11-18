import React from 'react';

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'

// React Router
import { withRouter } from 'react-router-dom'

// REDUX
import { connect } from 'react-redux'

// Selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, total, dispatch }) => (

    

    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.length ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />
                )
            ) : (
                <span className='empty-message'>Your cart is empty!</span>
            )

        }

        {
            cartItems.length ? (
                <div >

                    <hr style={{ color: "green", width: "95%", marginBottom: "5px" }} />

                    <div className='subtotal'>
                            <span>Subtotal </span>
                            <span style={{ fontWeight: "bold", color: "green"}}> ${total}</span>
                    </div>
                    

                    <hr style={{ color: "green", width: "95%", marginBottom: "12px" }} />

                </div>
            ) : <hr style={{ color: "green", width: "95%", marginBottom: "12px" }} />

        }

        

        <CustomButton onClick={ () => {history.push('/checkout');
                                        dispatch(toggleCartHidden()) }}>CHECKOUT</CustomButton>
    </div>
);

// React Redux
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

// Unstructured Selectors
// this makes sure that are cart-dropdown component does NOT get re-rendered
// when State changes that is unrelated to the cart items - for example, signing out
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });

// STRUCTURED SELECTOR
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
});

// connect() returns a component, withRouter() takes a component as a parameter
export default withRouter(connect(mapStateToProps)(CartDropdown));