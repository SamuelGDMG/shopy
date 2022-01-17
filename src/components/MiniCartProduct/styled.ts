import styled from "styled-components";
import Image from "components/Image";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 46px;
    align-items: center;

    justify-content: space-between;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  height: 20px;
  width: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
`;

export const ProductImage = styled(Image)`
  user-select: none;
  width: auto;
  height: auto;
  max-height: 20px;
  max-width: 20px;
`;

export const ProductName = styled.p`
  user-select: none;

  max-width: 80px;
  height: 18px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  

`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    border-color: gray;

    

    margin-left: 5px;
    margin-right: 5px;
`;
