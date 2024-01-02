import styled from "styled-components";
import FaqCar from "/images/faq/car.png";

export const FaqStyled = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rem 0;
	background-image: url(${FaqCar});
	background-repeat: no-repeat;
	background-position: left;
	.faqContent {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		.faqcard {
			width: 100%;
			max-width: 800px;
			.MuiAccordionSummary-root {
				background-color: #fff;
				padding: 0 2rem;
				.MuiAccordionSummary-content {
					& > p {
						font-size: 1rem;
						font-weight: 700;
						color: #000;
					}
				}
				svg {
					color: #000;
					font-size: 1.5rem;
				}
			}
			.Mui-expanded {
				background-color: var(--secondary-color);
				margin: 0;
				.MuiAccordionSummary-content {
					& > p {
						color: #fff;
					}
				}
				svg {
					color: #fff;
					font-size: 1.5rem;
				}
			}
			.MuiAccordionDetails-root {
				background-color: #fff;
				padding: 1rem 2rem;
				text-align: left;
				& > p {
					color: var(--gray-color);
					font-size: 1rem;
					font-weight: 400;
					font-family: var(--text-font);
				}
			}
		}
	}
`;
