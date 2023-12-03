import styled from "styled-components";

export const ButtonStyled = styled.button`
	background-color: var(--secondary-color);
	color: var(--white-color);
	font-family: var(--text-font);
	cursor: pointer;
	border: 2px solid var(--secondary-color);
	box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.25);
	transition: all 0.3s ease-in-out;
	font-size: 1.1rem;
	font-weight: 500;
	border-radius: 0.2rem;
	&:hover {
		background-color: var(--white-color);
		color: var(--secondary-color);
		border: 2px solid var(--secondary-color);
		box-shadow: 0 17px 15px 0 rgba(255, 83, 48, 0.25);
	}
`;
