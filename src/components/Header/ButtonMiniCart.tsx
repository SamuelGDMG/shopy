import React from "react";
import { IconMiniCart, CustomMiniCart } from "./styled";
import { AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ButtonMiniCart: React.FC = () => {
  const history = useNavigate();

  const goTo = () => history('/carrinho')
  
  return (
    <IconMiniCart data-testid="icon-minicart">
      <div style={{display: 'flex', cursor: 'pointer'}} onClick={goTo}><AiOutlineShopping size={25}/></div>
      <CustomMiniCart />
    </IconMiniCart>
  );
};

export default ButtonMiniCart;
