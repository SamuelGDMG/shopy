import styled from "styled-components";

interface ButtonProps{
    size: string;
}
export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #ace5ee;

  width: ${({ size }) => {
    const getSize = (width: string) =>
      ({
        big: "326px",
        medium: "227px",
        small: "108px",
        undefined: "215px",
        full: "100%",
      }[width]);

    return getSize(size);
  }};

  border-radius: 40px;
  border-style: solid;
  border-width: 0px;
  height: 40px;
`;
