import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 6px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 24%;

    padding-right: 5px;
    margin-top: 5px;

    img {
        max-width: 5rem;
        height: 100%;
    }
`;

export const TextContainer = styled.span`
    width: 22%;
    font-size: 1rem;
    font-weight: 500;
`;

export const QuantityContainer = styled(TextContainer)`
    display: flex;
    span {
        margin: 0 10px;
    }
    div {
        cursor: pointer;
    }
`;

export const RemoveButtonContainer = styled.div`
    cursor: pointer;

    font-weight: bold;
`;
