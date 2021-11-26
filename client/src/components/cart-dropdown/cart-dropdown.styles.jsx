import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 260px;
    height: auto;
    max-height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid rgb(240, 240, 240);
    background-color: whitesmoke;
    top: 90px;
    right: 40px;
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px,
        rgba(0, 0, 0, 0.2) 0px 3px 8px inset;
    border-radius: 3px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
    border-radius: 3px;
    border: 1px solid white;
    &:hover {
        background-color: #00c700;
        color: white;
        border: 1px solid white;
        opacity: 0.7;
    }
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 100px auto;
`;

export const CartItemsContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const Subtotal = styled.div`
    width: auto;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
