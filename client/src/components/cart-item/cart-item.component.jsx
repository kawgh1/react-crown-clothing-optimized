import React from "react";
import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage,
    Footer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <span>{name}</span>
            <Footer>
                <span style={{ minWidth: "60px" }}>
                    {quantity} x ${price}
                </span>

                <span style={{ fontWeight: "500" }}>${quantity * price}</span>
            </Footer>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
