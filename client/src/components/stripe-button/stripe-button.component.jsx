import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

    const onToken = (token) => {
        // console.log(token);
        // alert("Payment Successful");
        // send total and token to backend for stripe processing of payment
        axios({
            url: "http://localhost:5000/payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token: token,
            },
        })
            .then((response) => {
                alert("Payment successful");
            })
            .catch((error) => {
                console.log("Payment error: ", error);
                alert(
                    "Payment Unsuccessful: We encountered an error when processing your payment. Please use the provided test credit card. "
                );
            });
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
