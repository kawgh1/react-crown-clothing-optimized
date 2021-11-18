import React from "react";

// REDUX
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// SELECTOR
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        {/* <span className='item-count'>0</span> */}
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// React Redux
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
// });

// Unstructured Selectors
// this makes sure that our cart-icon's number of cart-items does NOT get re-rendered
// when State changes that is unrelated to the cart items - for example, signing out
// const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
// });

// STRUCTURED SELECTOR
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
