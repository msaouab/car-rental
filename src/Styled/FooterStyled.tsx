import styled from "styled-components";

export const FooterStyled = styled.footer`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
	& > * {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		ul {
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			& > li {
				font-family: var(--text-font);
				font-weight: lighter;
				font-size: 0.9rem;
			}
		}
	}
	& > * {
		& > .footerTitle {
			font-size: 1.25rem;
			font-weight: bold;
			font-family: var(--titles-font);
			& > span {
				font-weight: 300;
			}
		}
	}
	& > .carRental {
		& > p {
			font-family: var(--text-font);
			font-weight: 100;
			color: #777;
		}
	}
`;
