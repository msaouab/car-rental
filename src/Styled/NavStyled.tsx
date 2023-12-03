import styled from "styled-components";

export const NavStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	font-family: var(--text-font);
	padding: 0.5rem;
	& .hamburger {
		display: none;
	}
	& .logo {
		width: 9rem;
		& img {
			width: 100%;
		}
	}
	& .navbar,
	.login {
		display: flex;
		align-items: center;
		gap: 1rem;
		& a {
			text-decoration: none;
			color: var(--primary-color);
			font-size: 1rem;
			font-weight: 500;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: var(--secondary-color);
			}
		}
	}
	& .login {
		& button {
			padding: 0.7rem 1rem;
		}
	}
`;
