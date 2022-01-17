import styled from "styled-components";
import breakpoints from "theme/breakpoints";

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: ${breakpoints.md}px;
    justify-content: center;
    flex-wrap: wrap;
`;



