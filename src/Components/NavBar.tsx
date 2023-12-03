import { NavStyled } from "../Styled/NavStyled";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { Button } from "./Button";

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	const handleTogle = () => {
		setOpen(!isOpen);
	};

	return (
		<NavStyled className="navContainer container">
			<Link to={"/"} className="logo">
				<img src={Logo} alt="car rental" />
			</Link>
			<div className={isOpen ? "open navbar" : "navbar"}>
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
			<div className="hamburger" onClick={handleTogle}>
				<Hamburger toggled={isOpen} toggle={handleTogle} rounded />
			</div>
		</NavStyled>
	);
};
