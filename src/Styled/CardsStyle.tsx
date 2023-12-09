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
		gap: 3rem;
		padding: 55px;
		& > p {
			color: var(--primary-color);
			font-family: var(--text-font);
			text-align: start;
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
				}
			}
			& > span {
				display: flex;
				align-items: center;
			}
			& > svg {
				color: var(--secondary-color);
			}
		}
	}
`;
