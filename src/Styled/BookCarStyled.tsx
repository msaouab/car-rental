import styled from "styled-components";
import BookBanner from "/images/banners/book-banner.png";

export const BookCarStyled = styled.div`
	background: linear-gradient(rgba(45, 45, 45, 0.89), rgba(45, 45, 45, 0.89)),
		url(${BookBanner});
	padding: 4rem 0;
	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 3rem;
		font-family: var(--title-font);
		& p {
			font-size: 2rem;
			font-weight: bolder;
		}
		& :first-child {
			color: var(--white-color);
		}
		& :last-child {
			display: flex;
			align-items: center;
			text-align: center;
			gap: 0.5rem;
			color: var(--secondary-color);
		}
	}
	@media (max-width: 1300px) {
		& div {
			gap: 2rem;
			& h2 {
				font-size: 2rem;
			}
		}
	}
	@media (max-width: 1024px) {
		padding: 2rem 0;
		& div {
			flex-direction: column;
			gap: 1rem;
			& h2 {
				font-size: 2rem;
			}
		}
	}
	@media (max-width: 500px) {
		& div {
			& h2 {
				font-size: 1.5rem;
			}
		}
	}
`;
