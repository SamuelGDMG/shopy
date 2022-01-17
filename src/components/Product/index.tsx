import Button from "components/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "store/productsApi";
import { addProductToCart } from "store/storeSlice";
import { formatValue } from "utils";
import {
  BodyContainer,
  Container,
  ContainerProductName,
  ProductImage,
  ProductImageContainer,
  ProductName,
} from "./styled";

interface ProductProps{
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({product}) => {
  const dispatch = useDispatch();

  const onHandleAddProduct = () => {
    dispatch(addProductToCart(product.id));
  }

  return (
    <Container>
      <BodyContainer>
        <ProductImageContainer>
          <ProductImage src={product.image}/>
        </ProductImageContainer>
        <ContainerProductName>
          <ProductName>{product.name}</ProductName>
        </ContainerProductName>
        <div>{formatValue(Number(product.price))}</div>
        <Button onClick={onHandleAddProduct}>Comprar</Button>
      </BodyContainer>
    </Container>
  );
};

export default Product;
