import Button from "components/Button";
import MiniCartProduct from "components/MiniCartProduct";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store/storeHooks";
import { formatValue } from "utils";
import { Container } from "./styled";

interface MiniCartProps {
  className?: any;
}

const MiniCart: React.FC<MiniCartProps> = ({ ...props }) => {
  const history = useNavigate();
  const productSelected = useAppSelector((e) => e.storeSlice.productsSelected);
  const allProducts = useAppSelector((e) => e.storeSlice.allProducts);


  const arrayProducts = Object.values(productSelected);

  const goTo = () => history("/carrinho");

  const items = arrayProducts.reduce((prev, val) => prev + val.qty, 0.0);
  const price = formatValue(arrayProducts.reduce((prev, val) => prev + (val.qty * Number(allProducts[val.id].price)), 0.0));

  return (
    <Container {...props}>
      <div style={{ display: "flex", justifyContent: "center" }}>Sacola</div>
      {arrayProducts.length < 1 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          Sua sacola está vazio
        </div>
      ) : (
        <ProductList arrayProducts={arrayProducts} />
      )}
      {arrayProducts.length < 1 ? null : (
        <div>
          <div>Items: {items}</div>
          <div>Total: {price}</div>
          <Button onClick={goTo}>Ir para o carrinho</Button>
        </div>
      )}
    </Container>
  );
};

interface ProductListProps {
  arrayProducts: { id: string; qty: number }[];
}

const ProductList: React.FC<ProductListProps> = ({ arrayProducts }) => {

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        gap: '3px'
      }}
    >
      {arrayProducts.map(({id, qty}) => (
        <MiniCartProduct key={id} productId={id} qty={qty}/>
      ))}
    </div>
  );
};

export default MiniCart;
