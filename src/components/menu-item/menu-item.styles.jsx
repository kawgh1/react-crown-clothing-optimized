import styled from "styled-components";

export const MenuItemContainer = styled.div`
    min-width: 35%;
    height: 25rem;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    margin: 0 2.5px 5px;
    overflow: hidden;
    font-family: "Rock Salt";
    position: relative;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
    &:hover {
        cursor: pointer;
        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            filter: brightness(125%);
        }
        & .content {
            opacity: 0.9;
        }
    }
    &:first-child {
        margin-right: 7.5px;
    }
    &:last-child {
        margin-left: 7.5px;
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-size: cover;
    background-position: 25% 25%;
    filter: brightness(125%);
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    height: 7vh;
    padding: 0 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(245, 245, 245);
    background-color: rgba(0, 0, 0, 0.01);
    // box-shadow:
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 28px 8px;

    // opacity: 0.95;
    position: absolute;
    //
    // width: 12%;
    overflow: hidden;

    bottom: 25px;

    border-radius: 2px;

    &:hover {
        cursor: pointer;

        & .title,
        .subtitle {
            transform: scale(1.1);
            transition: transform 0.25s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            // opacity: 0.6;
        }
    }
`;

export const ContentTitle = styled.span`
    font-weight: 700;
    margin: 0 6px 0;
    font-size: 1rem;
    color: #ffffff;
    // opacity: 1;
    filter: brightness(250%);
`;

export const ContentSubtitle = styled.span`
    font-weight: lighter;
    font-size: 1.5vh;
`;
