import styled from "styled-components";

export const HomeHeaderStyled = styled.section`
	& .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& .leftSection {
			text-align: start;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			& p {
				font-size: 1.2rem;
				font-weight: 500;
				color: var(--primary-color);
			}
		}
		& .rightSection {
			width: 60%;
			& img {
				width: 100%;
				object-fit: contain;
			}
		}
	}
`;