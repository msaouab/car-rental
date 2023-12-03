import styled from "styled-components";

export const FooterStyled = styled.footer`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-content: center;
	gap: 2rem;
	& > * {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 1rem;
		font-weight: 100;
		& > .footerTitle {
			font-size: 1.4rem;
			letter-spacing: 1.5px;
			font-weight: bold;
			font-family: var(--titles-font);
			span {
				color: var(--primary-color);
				font-weight: 300;
			}
		}
		& > .desctiption {
			color: #777;
			max-width: 90%;
		}
		& > p {
			font-family: var(--text-font);
		}
		& > a {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			color: var(--primary-color);
			font-family: var(--text-font);
			text-decoration: none;
			& > svg {
				font-size: 1.3rem;
			}
		}
		& > a:hover {
			color: var(--secondary-color);
		}

		& > form {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			& > * {
				width: 100%;
				border-radius: 3px;
				outline: none;
				font-family: var(--text-font);
				line-height: 26px;
				padding: 10px 60px;
			}
			& > input {
				font-weight: 400;
				border: none;
				border-width: 1px;
				background-color: #ececec;
			}
			& > button {
				background-color: var(--secondary-color);
				color: var(--white-color);
				font-family: var(--text-font);
				cursor: pointer;
				border: 2px solid var(--secondary-color);
				box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.25);
				transition: all 0.3s ease-in-out;
				font-size: 1.1rem;
				font-weight: 500;
			}
			& > button:hover {
				background-color: var(--white-color);
				color: var(--secondary-color);
				border: 2px solid var(--secondary-color);
				box-shadow: 0 17px 15px 0 rgba(255, 83, 48, 0.25);
			}
		}
	}

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
		& > * {
			justify-content: center;
			align-items: center;
			text-align: center;
			& > .footerTitle {
				font-size: 1.2rem;
				& > .desctiption {
					color: #777;
					max-width: 70%;
				}
			}
		}
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		& > * {
			justify-content: center;
			align-items: center;
			text-align: center;
			& > .footerTitle {
				font-size: 1.2rem;
				& > .desctiption {
					color: #777;
				}
			}
		}
	}
`;
