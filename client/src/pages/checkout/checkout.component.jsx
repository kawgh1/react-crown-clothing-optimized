import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer,
    TotalPrice,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>

        {cartItems.length > 0 ? (
            <>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <TotalContainer>
                    <TotalPrice>TOTAL: ${total}</TotalPrice>
                </TotalContainer>
                <WarningContainer>
                    *Please use the following test credit card for payments*
                    <br />
                    <br />
                    4242-4242-4242-4242
                    <br />
                    Exp: 04/24 - CVV: 4242
                </WarningContainer>
                <StripeCheckoutButton price={total} />
            </>
        ) : (
            <div>
                <h1>Your cart is empty!</h1>
            </div>
        )}
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
