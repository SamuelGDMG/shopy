import { Container } from "./styled";
import React from "react";

interface ButtonProps{
    children: React.ReactNode;
    size?: string;
    onClick?: () => void;
}

const Button : React.FC<ButtonProps> = ({children, size = "full", onClick}) => {

    return <Container size={size} onClick={onClick}>{children}</Container>
}

export default Button;