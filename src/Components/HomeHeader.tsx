import { HomeHeaderStyled } from "../Styled/HomeHeaderStyled";
import { Button } from "./Button";
import mainCar from "/images/hero/main-car.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";

export const HomeHeader = () => {
	return (
		<HomeHeaderStyled>
			<div className="container">
				<div className="leftSection">
					<h2>Plan your trip now</h2>
					<h4>
						Save <span>big</span> with our car rental
					</h4>
					<p>
						Rent the car of your dreams. Unbeatable prices,
						unlimited miles, flexible pick-up options and much more.
					</p>
					<div className="buttons">
						<Button className="btn book-btn" type="submit">
							Book Now
							<FaRegCircleCheck />
						</Button>
						<Button className="btn learn-btn" type="submit">
							Register
							<IoIosArrowForward />
						</Button>
					</div>
				</div>
				<div className="rightSection">
					<img src={mainCar} alt="main hero car" />
				</div>
			</div>
		</HomeHeaderStyled>
	);
};
