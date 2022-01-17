import styled from "styled-components";
import Image from "components/Image";

export const Container = styled.div`
  cursor: pointer;
  width: 220px;
  height: 300px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  background: #ffffff;
  border-radius: 24px;
  margin: 0 8px 24px;

  &:hover {
    height: 310px;
    width: 230px;

    button {
      opacity: 1;
    }
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  height: 120px;
  width: 120px;
  max-height: 120px;
  max-width: 120px;
  min-height: 120px;
  min-width: 120px;
`;

export const ProductImage = styled(Image)`
  user-select: none;
  width: auto;
  height: auto;
  max-height: 120px;
  max-width: 120px;
`;

export const BodyContainer = styled.div`
  top: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 8px;
  padding-left: 8px;
  white-space: nowrap;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;
`;

export const ProductName = styled.p`
  user-select: none;

  width: 100%;
  height: 18px;
  display: flex;
  justify-content: center;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  
`;

export const ContainerProductName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
`;
