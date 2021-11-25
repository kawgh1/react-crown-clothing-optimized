import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
    width: 16rem;
    display: flex;
    flex-direction: column;
    height: 20rem;
    align-items: center;
    margin: 10px 5px;
    border-radius: 2px;
    position: relative;

    .image {
        width: 100%;
        height: 95%;
        background-size: cover;
        background-position: center;
        margin: 5px;
        filter: brightness(115%);
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 17px 0px;
        border: 1px solid white;
    }

    &:hover,
    &:active {
        .image {
            opacity: 0.9;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const AddButton = styled(CustomButton)`
    width: 40%;
    opacity: 0.7;
    position: absolute;
    top: 205px;
    display: none;
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin: 5px;
    filter: brightness(115%);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 17px 0px;
    border: 1px solid white;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
    width: 82%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
    text-align: right;
`;
