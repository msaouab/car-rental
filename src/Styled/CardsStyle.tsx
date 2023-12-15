import styled from "styled-components";

export const CardsStyle = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;

	& > .card {
		width: 32rem;
		box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 55px;
		& > p {
			color: var(--primary-color);
			font-family: var(--title-font);
			text-align: start;
			font-size: 1.3rem;
			font-weight: 500;
		}
		& > .Profile {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& > .imgContainer {
				display: flex;
				align-items: center;
				gap: 1rem;
				& > img {
					max-width: 70px;
					width: 100%;
					border-radius: 50%;
				}
				& > p {
					display: flex;
					flex-direction: column;
					align-items: start;
					font-size: 1.2rem;
					font-weight: bolder;
					color: var(--primary-color);
					& > span {
						font-size: 1rem;
						font-weight: 400;
					}
				}
			}
			& > svg {
				color: var(--secondary-color);
			}
		}
	}
`;
