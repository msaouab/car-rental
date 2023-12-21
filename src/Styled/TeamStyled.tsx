import styled from "styled-components";

export const TeamStyled = styled.div`
	& > section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		width: 100%;
		& > .cardContainer {
			border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 20px 20px 20px #eee;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.2rem;
			padding-bottom: 1rem;
			& > img {
				width: 100%;
				height: 100%;
				border-radius: 5px 5px 0 0;
			}
			& > h1 {
				font-size: 1.5rem;
				font-weight: 600;
				margin: 0.5rem 0;
				font-family: var(--title-font);
			}
		}
	}
`;
