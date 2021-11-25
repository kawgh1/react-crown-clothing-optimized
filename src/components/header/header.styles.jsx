import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: auto;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
`;

export const OptionLink = styled(Link)`
    margin-top: 25px;
    cursor: pointer;
    min-width: 60px;
    padding: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
