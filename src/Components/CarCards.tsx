import { CardCarStyle } from "../Styled/CarCardsStyle";
import { CiStar } from "react-icons/ci";
import { AiTwotoneCar } from "react-icons/ai";
import { VehicleType } from "../_domain/interfaces";
import { Button } from "./Button";

export const CarCards = (props: VehicleType) => {
	const {
		name,
		image,
		price,
		model,
		transmission,
		fuel,
	} = props;
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(<CiStar key={i} />);
		}
		return stars;
	};
	return (
		<CardCarStyle>
			<div className="imgContainer">
				<img src={image} alt={name} />
			</div>
			<div className="nameContainer itemContainer">
				<h1>
					{name}
					<span>{renderStars()}</span>
				</h1>
				<h1>
					${price}
					<span>per day</span>
				</h1>
			</div>
			<div className="brandContainer itemContainer">
				<p>
					<AiTwotoneCar /> {model}
				</p>
				<p>
					4/5 <AiTwotoneCar />
				</p>
			</div>
			<div className="typeContainer itemContainer">
				<p>
					<AiTwotoneCar />
					{fuel}
				</p>
				<p>
					{transmission}
					<AiTwotoneCar />
				</p>
			</div>
			<div className="lineContainer itemContainer"></div>
			<div className="buttonContainer itemContainer">
				<Button>Book Ride</Button>
			</div>
		</CardCarStyle>
	);
};
