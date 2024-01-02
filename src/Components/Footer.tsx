import { FooterStyled } from "../Styled/FooterStyled";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandWhatsapp } from "react-icons/tb";
import { Button } from "./Button";

export const Footer = () => {
	return (
		<FooterStyled className="container">
			<div className="carRental">
				<h2 className="footerTitle">
					CAR <span>Rental</span>
				</h2>
				<p className="desctiption">
					We offers a big range of vehicles for all your driving
					needs. We have the perfect car to meet your needs.
				</p>
				<a href="https://wa.me/123456789" target="_blank">
					<TbBrandWhatsapp /> <span>(123) -456-789</span>
				</a>
				<a href="mailto:carrental@gmail.com" target="_blank">
					<HiOutlineMail /> <span>carrental@gmail.com</span>
				</a>
				<a href="https://xpeedstudio.com/" target="_blank">
					Design by XpeedStudio
				</a>
				<a href="https://github.com/msaouab" target="_blank">
					Coded by msaouab
				</a>
			</div>
			<div className="Company">
				<h2 className="footerTitle">COMPANY</h2>
				<a href="">New York</a>
				<a href="">Careers</a>
				<a href="">Mobile</a>
				<a href="">Blog</a>
				<a href="">How we work</a>
			</div>
			<div className="workingHours">
				<h2 className="footerTitle">WORKING HOURS</h2>
				<p>Mon - Fri: 9:00AM - 9:00PM</p>
				<p>Sat: 9:00AM - 19:00PM</p>
				<p>Sun: Closed</p>
			</div>
			<div className="Subscription">
				<h2 className="footerTitle">SUBSCRIPTION</h2>
				<p>Subscribe your Email address for latest news & updates.</p>
				<form>
					<input type="email" placeholder="Enter Email Address " id="emailID" />
					<Button type="submit">Submit</Button>
				</form>
			</div>
		</FooterStyled>
	);
};
