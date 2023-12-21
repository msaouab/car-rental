import styled from "styled-components";

export const HomeHeaderStyled = styled.section`
	padding: 0;
	& .container {
		height: 90dvh;
		display: flex;
		align-items: center;
		& .leftSection {
			display: flex;
			flex-direction: column;
			text-align: start;
			gap: 1rem;
			& h2 {
				font-size: 2rem;
				font-weight: 700;
				font-family: var(--title-font);
			}
			& h4 {
				font-size: 3.5rem;
				font-weight: 900;
				color: var(--primary-color);
				font-family: var(--title-font);
				line-height: 1.2;
				& span {
					color: var(--secondary-color);
				}
			}
			& .buttons {
				display: flex;
				gap: 1rem;
				& button {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.5rem;
					padding: 1rem 2rem;
					font-size: 1.2rem;
					border-radius: 0.2rem;
					transition: all 0.3s ease-in-out;
					color: var(--white-color);
					& svg {
						font-size: 1.2rem;
					}
					&:hover {
						background-color: var(--white-color);
						border-color: var(--secondary-color);
						color: var(--secondary-color);
					}
				}
				& .book-btn {
					&:hover {
						border-color: var(--secondary-color);
						color: var(--secondary-color);
					}
				}
				& .learn-btn {
					background-color: var(--primary-color);
					border-color: var(--primary-color);
					&:hover {
						border-color: var(--primary-color);
						color: var(--primary-color);
					}
				}
			}
		}
		& .rightSection {
			width: 100%;
			& img {
				max-width: 100%;
				object-fit: contain;
			}
		}
	}
`;
