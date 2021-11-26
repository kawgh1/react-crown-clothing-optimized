import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publicKey}
        />
    );
};

export default StripeCheckoutButton;
