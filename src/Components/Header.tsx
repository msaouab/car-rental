import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import { HeaderStyle } from "../Styled/NavStyled";
import { HomeHeader } from "./HomeHeader";

export const Header = () => {
	const location = useLocation();
	const [isHome, setIsHome] = useState(false);
	const [link, setLink] = useState("");

	useEffect(() => {
		setIsHome(location.pathname === "/");
		setLink(location.pathname.substring(1));
	}, [location.pathname]);

	return (
		<HeaderStyle className={isHome ? "homePage" : "Page"}>
			<div className="overLap">
				<NavBar />
				{isHome ? (
					<HomeHeader />
				) : (
					<section className="container">
						<h2>{link}</h2>
						<p>
							<Link to={"/"}>Home</Link> / {link}
						</p>
					</section>
				)}
			</div>
		</HeaderStyle>
	);
};
