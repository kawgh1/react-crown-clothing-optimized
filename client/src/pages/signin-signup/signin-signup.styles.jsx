import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
    max-width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    padding: 5px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
