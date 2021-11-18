import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    width: 95%;
    max-width: 1000px;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
        margin: 10px auto;
        margin-top: 50px;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 25%;

    &:nth-last-child(2) {
        width: 15%;
    }

    &:last-child {
        width: 17%;
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const WarningContainer = styled.div`
    text-align: center;
    margin: 40px auto;
    font-size: 24px;
    color: brown;
`;

export const TotalPrice = styled.div`
    font-weight: bold;
    color: green;
`;
