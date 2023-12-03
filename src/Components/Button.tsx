import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "../Styled/ButtonStyled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
