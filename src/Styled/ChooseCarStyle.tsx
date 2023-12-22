import styled from "styled-components";
import BookBg from "/images/book-car/book-bg.png";

export const ChooseCarStyle = styled.section`
	border: 1px solid red;
	& .container {
		border: 1px solid green;
		background-image: url(${BookBg});
		display: flex;
		flex-direction: column;
		text-align: start;
		gap: 2.5rem;
		padding: 40px 45px;

		& > .bookCarTitle {}

		& > article {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			& > .selectWrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
			}
		}
	}
`;
