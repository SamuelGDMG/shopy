import React from "react";
import { AiOutlineDelete, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store/storeHooks";
import { addProductToCart, deleteProductFromCart, removeProductFromCart } from "store/storeSlice";
import { formatValue } from "utils";
import {
  Container,
  Icons,
  ProductImage,
  ProductImageContainer,
  ProductName,
} from "./styled";

interface MiniCartProductProps{
  productId: string;
  qty: number;
}

const MiniCartProduct: React.FC<MiniCartProductProps> = ({productId, qty}) => {
  const product = useAppSelector((e) => e.storeSlice.allProducts[productId]);
  const productSelected = useAppSelector((e) => e.storeSlice.productsSelected[productId]);

  const dispatch = useDispatch();


  if(!product){
    return <></>;
  }

  const onHandleAddProduct = () => {
    if(productSelected.qty < product.stock ){
      dispatch(addProductToCart(product.id));
    }
  }

  const onHanldeRemoveProductFromCart = () => {
    dispatch(removeProductFromCart(product.id));
  }

  const onHandleDeleteProductFromCart = () => {
      dispatch(deleteProductFromCart(product.id));
  }

  const priceFormated = formatValue(qty * Number(product.price));

  return (
    <Container>
      <ProductImageContainer>
        <ProductImage />
      </ProductImageContainer>
      <div style={{ display: "flex", flexDirection: "column", flex: 3, paddingLeft: '8px'}}>
        <ProductName>
          {product.name}
        </ProductName>
        <div>Total: {priceFormated}</div>
      </div>
      <div style={{display: 'flex', flex: 2}}>
        <Icons>
          <AiOutlineLine style={{cursor: 'pointer'}} size={12} onClick={onHanldeRemoveProductFromCart} />
          <div style={{ display: "flex" }}>{qty}</div>
          <AiOutlinePlus style={{cursor: 'pointer'}} size={12} onClick={onHandleAddProduct} color={product.stock == productSelected.qty ? 'gray' : 'black'}/>
        </Icons>
      </div>
      <AiOutlineDelete style={{cursor: 'pointer'}} size={16} onClick={onHandleDeleteProductFromCart}/>
    </Container>
  );
};

export default MiniCartProduct;
