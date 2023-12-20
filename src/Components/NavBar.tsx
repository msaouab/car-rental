import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import Logo from "/images/logo/logo.png";
import { Button } from "./Button";
import { NavStyled } from "../Styled/NavStyled";

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	const handleTogle = () => {
		setOpen(!isOpen);
	};

	const closeTogle = () => {
		if (isOpen) {
			setOpen(false);
		}
	};

	return (
		<NavStyled className="navContainer container" onClick={closeTogle}>
			<Link to={"/"} className="logo">
				<img src={Logo} alt="car rental" />
			</Link>
			<div className="hamburger" onClick={handleTogle}>
				<Hamburger toggled={isOpen} toggle={handleTogle} rounded />
			</div>
			<div className={isOpen ? "open" : "full-size"}>
				<Link to={"/"}>Home</Link>
				<Link to={"about"}>About</Link>
				<Link to={"models"}>Vehicle Models</Link>
				<Link to={"testimonials"}>Testimonials</Link>
				<Link to={"team"}>Our Team</Link>
				<Link to={"contact"}>Contact</Link>
			</div>
			<div className="login">
				<a href="">Sign In</a>
				<Button type="submit">Register</Button>
			</div>
		</NavStyled>
	);
};
