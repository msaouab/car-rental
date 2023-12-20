import styled from "styled-components";
import HeroMainCar from "/images/hero/hero-bg.png";
import HeroesCar from "/images/hero/heroes-bg.png";

export const HeaderStyle = styled.header`
	&.homePage {
		background-image: url(${HeroMainCar});
		background-repeat: no-repeat;
		background-position: right top;
		height: 100dvh;
		padding: 1rem 0;
	}
	&.Page {
		background-image: url(${HeroesCar});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		& .overLap {
			background-color: hsla(0, 0%, 100%, 0.8);
			height: 26rem;
			position: relative;
			padding: 1rem 0;

			& > :last-child {
			}
			& > section {
				display: flex;
				flex-direction: column;
				width: 100%;
				align-items: flex-start;
				justify-content: center;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				& > h2 {
					font-size: 2.5rem;
					font-weight: 900;
					color: var(--primary-color);
					text-transform: capitalize;
				}
				& > p {
					font-size: 1.3rem;
					font-weight: 500;
					color: var(--primary-color);
					text-transform: capitalize;
					& > a {
						text-decoration: none;
						color: var(--primary-color);
						transition: all 0.3s ease-in-out;
						&:hover {
							color: var(--secondary-color);
						}
					}
				}
			}
		}
	}
`;

export const NavStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-family: var(--text-font);
	& .hamburger {
		display: none;
	}
	& .logo {
		width: 9rem;
		& img {
			width: 100%;
			object-fit: contain;
		}
	}
	& .full-size {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	& .login {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		& button {
			padding: 0.7rem 1rem;
			font-size: 1rem;
			font-weight: 500;
			color: var(--primary-color);
			text-transform: capitalize;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: var(--secondary-color);
			}
		}
	}
	& .full-size,
	& .login {
		& a {
			text-decoration: none;
			font-size: 1.1rem;
			font-weight: 500;
			color: var(--primary-color);
			text-transform: capitalize;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: var(--secondary-color);
			}
		}
	}

	@media (max-width: 1000px) {
		& .hamburger {
			display: block;
		}
		& .full-size {
			display: none;
		}
		& .open {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			position: absolute;
			top: 15%;
			left: 0;
			width: 100%;
			background-color: hsla(0, 0%, 100%, 0.8);
			padding: 1rem 0;
			z-index: 1;
			& a {
				color: var(--primary-color);
				text-decoration: none;
				&:hover {
					color: var(--secondary-color);
				}
			}
		}
	}
	@media (max-width: 600px) {
		& .logo {
			width: 7rem;
		}
		& .login {
			flex-direction: column-reverse;
			align-items: center;
			gap: 0.3rem;
			& a {
				font-size: 0.8rem;
				text-decoration: underline;
			}
			& button {
				padding: 0.3rem 0.5rem;
				font-size: 0.8rem;
			}
		}
	}
`;
