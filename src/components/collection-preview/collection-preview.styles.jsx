import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 10px;
    margin-left: 5%;
    cursor: pointer;
    &:hover {
        color: grey;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
