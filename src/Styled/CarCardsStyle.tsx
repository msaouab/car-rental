import styled from "styled-components";

export const CardCarStyle = styled.div`
	border: 1px solid var(--gray-color);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	text-align: start;
	gap: 1rem;
	& .itemContainer {
		padding: 0 1rem 1rem 1rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: var(--title-font);
	}
	& .imgContainer {
		height: 15rem;
		width: 100%;
		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	& .nameContainer {
		& h1 {
			display: flex;
			flex-direction: column;
			& span {
				color: var(--primary-color);
				font-size: 1rem;
				font-weight: 400;
			}
		}
		:nth-child(1) {
			align-items: flex-start;
			& span {
				color: var(--primary-color);
				font-size: 1rem;
			}
		}
		:nth-child(2) {
			align-items: flex-end;
		}
	}
	& .brandContainer,
	.typeContainer {
		& p {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
		}
	}
	& .lineContainer {
		border-top: 0.1px solid var(--gray-color);
		padding: 0;
		width: 90%;
		margin: auto;
	}
	& button {
		padding: 1rem 2rem;
		width: 100%;
	}
`;
