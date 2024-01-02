import styled from "styled-components";
import { KpisCarProps } from "../_domain/interfaces";

const KpisStyle = styled.button<{ $isActive?: boolean }>`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1rem;
	border: none;
	cursor: pointer;
	padding: 15px 25px;
	width: 100%;
	background-color: ${({ $isActive }) =>
		$isActive ? "var(--secondary-color)" : "#e9e9e9"};
	& > p {
		font-weight: 600;
		font-size: 1.2rem;
		color: ${({ $isActive }) =>
			$isActive ? "var(--white-color)" : "var(--primary-color)"};
	}
	&:hover {
		background-color: var(--secondary-color);
		& > p {
			color: var(--white-color);
		}
	}
	@media (max-width: 768px) {
		& > p {
			font-size: 1rem;
		}
	}
`;

export const KpisCar = (props: KpisCarProps) => {
	const { name, isActive, onClick } = props;
	return (
		<KpisStyle onClick={onClick} $isActive={isActive}>
			<p>{name}</p>
		</KpisStyle>
	);
};
