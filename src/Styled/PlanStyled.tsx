import styled from "styled-components";

export const PlanSectionStyled = styled.section`
	font-family: var(--text-font);
	padding: 5rem 0;
	& > .plan {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		& > .planTitles {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		& > .planBoxes {
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;

			& > .planBox {
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				gap: 1rem;
				width: 310px;
				& > img {
					width: 100%;
					max-width: 11rem;
				}
				& > h2 {
					font-size: 1.2rem;
					font-weight: 700;
					font-family: var(--titles-font);
				}
			}
		}
	}
`;
