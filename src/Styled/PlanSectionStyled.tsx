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
			& > h3 {
				font-size: 1.7rem;
				font-weight: 500;
				color: var(--primary-color);
				text-align: center;
			}
			& > h2 {
				font-size: 2.5rem;
				font-weight: 700;
				font-family: var(--titles-font);
				text-align: center;
			}
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
				& > p {
					font-size: 1.1rem;
					font-weight: 400;
					color: var(--gray-color);
				}
			}
		}
	}
`;
