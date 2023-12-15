import styled from "styled-components";
import BookBanner from "/images/banners/book-banner.png";

export const BookCarStyled = styled.div`
	background: linear-gradient(rgba(45, 45, 45, 0.89), rgba(45, 45, 45, 0.89)),
		url(${BookBanner});
	padding: 5rem 0;
	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 3rem;
		font-family: var(--title-font);
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
`;
