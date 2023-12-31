import styled from "styled-components";
import BookBg from "/images/book-car/book-bg.png";

export const ChooseCarStyle = styled.section`
	& .container {
		background-image: url(${BookBg});
		box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		text-align: start;
		gap: 2rem;
		padding: 40px 45px 80px 45px;

		& > .bookCarTitle {
			font-size: 1.5rem;
			font-weight: 900;
			color: var(--primary-color);
			font-family: var(--title-font);
		}

		& > .emptyField {
			width: 100%;
			padding: 0.5rem 1rem;
			border-radius: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #f8d7da;
			& > p {
				color: #721c24;
			}
			& > span {
				cursor: pointer;
				& > svg {
					color: #721c24;
					font-size: 1.5rem;
				}
			}
		}

		& > article {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 1fr);
			gap: 1.5rem;
			& > .selectWrapper {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				gap: 0.5rem;
				& > label {
					font-size: 1rem;
					font-weight: 600;
					color: var(--primary-color);
					font-family: var(--title-font);
					display: flex;
					align-items: center;
					& > svg {
						margin-right: 0.5rem;
					}
					& > span {
						color: red;
					}
				}
				& > select,
				input {
					padding: 0.9rem 1rem;
					color: #ababab;
					width: 100%;
					border: 1px solid #ccd7e6;
					outline: none;
					font-size: 0.9rem;
				}
				& > button {
					width: 100%;
					padding: 0.9rem 1rem;
					margin-top: 1.8rem;
				}
			}
		}
	}
	@media (max-width: 1024px) {
		& .container {
			& > article {
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(3, 1fr);
			}
		}
	}
	@media (max-width: 600px) {
		& .container {
			& > article {
				grid-template-columns: repeat(1, 1fr);
				grid-template-rows: repeat(6, 1fr);
			}
		}
	}
`;
