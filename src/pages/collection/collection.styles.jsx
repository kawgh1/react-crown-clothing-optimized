import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.25rem;
    max-width: 1200px;
    margin: auto;
`;

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 10px;
`;

export const CollectionItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: space-evenly;
    & > div {
        margin: 10px 30px 30px;
    }
`;
