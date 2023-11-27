import { FooterStyled } from "../Styled/FooterStyled";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
	return (
		<FooterStyled className="container">
			<div className="carRental">
				<h2 className="footerTitle">
					CAR <span>Rental</span>
				</h2>
				<p>
					We offers a big range of vehicles for all your driving
					needs. We have the perfect car to meet your needs.
				</p>
				<ul>
					<li>
						<MdPhoneInTalk /> (123) -456-789
					</li>
					<li>
						<IoIosMail />
						carrental@gmail.com
					</li>
				</ul>
				<p>
					Design by <a href="">XpeedStudio</a>
				</p>
				<p>
					Coded by <a href="">msaouab</a>
				</p>
			</div>
			<div className="Company">
				<h2 className="footerTitle">COMPANY</h2>
				<ul>
					<li>New York</li>
					<li>Careers</li>
					<li>Mobile</li>
					<li>Blog</li>
					<li>How we work</li>
				</ul>
			</div>
			<div className="workingHours">
				<h2 className="footerTitle">WORKING HOURS</h2>
				<ul>
					<li>Mon - Fri: 9:00AM - 9:00PM</li>
					<li>Sat: 9:00AM - 19:00PM</li>
					<li>Sun: Closed</li>
				</ul>
			</div>
			<div className="Subscription">
				<h2 className="footerTitle">SUBSCRIPTION</h2>
				<p>Subscribe your Email address for latest news & updates.</p>
				<form>
					<input type="email" placeholder="Enter Email Address " />
					<button type="submit" value="Submit"></button>
				</form>
			</div>
		</FooterStyled>
	);
};
