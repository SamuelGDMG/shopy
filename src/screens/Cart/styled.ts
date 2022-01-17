import styled from "styled-components";
import breakpoints from "theme/breakpoints";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 56px;
`;

export const ContainerProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: ${breakpoints.md}px;
    flex: 1;
    gap: 32px;
    justify-content: center;
`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 400px;
`;

export const ContainerSummary = styled.aside`
    display: flex;
    min-width: 376px;
    background-color: rgb(250, 250, 250);
    flex-direction: column;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const ItemSummary = styled.div`

    display: flex;
    padding: 15px 33px 15px 33px;
    justify-content: space-between;

`;