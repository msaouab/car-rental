import styled from "styled-components";

export const VehicleModelsStyled = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	padding: 5rem 2rem;
	@media (max-width: 1024px) {
		padding: 1rem;
	}
	@media (max-width: 500px) {
		padding: 1rem;
	}
`;
