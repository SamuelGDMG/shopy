import React from "react";
import { Container, Content } from "./styled";
import ButtonMiniCart from "./ButtonMiniCart";
import { useNavigate } from "react-router-dom";

const Header : React.FC = () => {
    const history = useNavigate();

    const goTo = () => history('/')

    return <Container>
        <Content>
            <div onClick={goTo} style={{cursor: 'pointer'}}>Shopy</div>
            <ButtonMiniCart/>
        </Content>
    </Container>
}

export default Header;