import styled from "styled-components";
import breakpoints from "theme/breakpoints";

export const Container = styled.header`
    display: flex;
    height: 46px;
    width: 100%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    justify-content: center;
    position: fixed;
    background-color: white;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    max-width: ${breakpoints.md}px;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
`;


export const IconMiniCart = styled.div`
    position: relative;
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;



