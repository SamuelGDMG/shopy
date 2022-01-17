import Button from "components/Button";
import Header from "components/Header";
import MiniCartProduct from "components/MiniCartProduct";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store/storeHooks";
import { Container, Content, ContainerProduct, ProductList } from "./styled";
import Summary from "./Summary";

const Cart: React.FC = () => {
    const productSelected = useAppSelector((e) => e.storeSlice.productsSelected);
    const arrayProducts = Object.values(productSelected);

    return <>
        <Header />
        <Container>
        <Content>
            {arrayProducts.length < 1 ? <Message/> : <List/>}
        </Content>
      </Container>
    </>
}

const List = () => {
    const productSelected = useAppSelector((e) => e.storeSlice.productsSelected);
    const arrayProducts = Object.values(productSelected);


    return <ContainerProduct>
        <ProductList>
            {arrayProducts.map(({id, qty}) => <MiniCartProduct productId={id} qty={qty}/>)}
        </ProductList>
        <Summary/>
    </ContainerProduct>
}

const Message = () => {
    const history = useNavigate();
    const goTo = () => history("/");
    return (<div>
        <div>Seu carrinho está vazio</div>
        <Button onClick={goTo}>Continuar comprando</Button>
    </div>);
};


export default Cart;