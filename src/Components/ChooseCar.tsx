import { AiTwotoneCar } from "react-icons/ai";
import { ChooseCarStyle } from "../Styled/ChooseCarStyle";
import { Button } from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { Cars, PickUp } from "../_domain/Data";

export const ChooseCar = () => {
	return (
		<ChooseCarStyle>
			<div className="container">
				<h1 className="bookCarTitle">Book a car</h1>
				<article className="debug">
					<div className="selectWrapper select-car">
						<label htmlFor="">
							<AiTwotoneCar />
							Select Your Car Type <span>*</span>
						</label>
						<select name="" id="">
							{Cars.map((car) => (
								<option key={car.name} value={car.name}>
									{car.name}
								</option>
							))}
						</select>
					</div>
					<div className="selectWrapper pick-up">
						<label htmlFor="">
							<FaLocationDot />
							Pick-up <span>*</span>
						</label>
						<select name="" id="">
							{PickUp.map((car) => (
								<option key={car.name} value={car.name}>
									{car.name}
								</option>
							))}
						</select>
					</div>
					<div className="selectWrapper drop-of">
						<label htmlFor="">
							<FaLocationDot />
							Drop-of <span>*</span>
						</label>
						<select name="" id=""></select>
					</div>
					<div className="selectWrapper pick-up-date">
						<label htmlFor="">
							<IoCalendarOutline />
							Pick-up <span>*</span>
						</label>
						<input type="date" id="start-date" name="start-date" />
					</div>
					<div className="selectWrapper drop-of-date">
						<label htmlFor="">
							<IoCalendarOutline />
							Drop-of <span>*</span>
						</label>
						<input type="date" id="end-date" name="end-date" />
					</div>
					<div className="selectWrapper search">
						<Button>Search</Button>
					</div>
				</article>
			</div>
		</ChooseCarStyle>
	);
};
