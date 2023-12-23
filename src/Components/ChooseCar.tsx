import { AiTwotoneCar } from "react-icons/ai";
import { ChooseCarStyle } from "../Styled/ChooseCarStyle";
import { Button } from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { Cars, PickUp } from "../_domain/Data";
import { useState } from "react";
import { ChangeEvent } from "react";

export const ChooseCar = () => {
	const currentDate = new Date().toISOString().split("T")[0];
	const [startDate, setStartDate] = useState(currentDate);
	const [carType, setCarType] = useState("default");
	const [pickUp, setPickUp] = useState("default");
	const [dropOf, setDropOf] = useState("default");
	const [openDialog, setOpenDialog] = useState(false);

	const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStartDate(e.target.value);

		const endDate = new Date(e.target.value);
		endDate.setDate(endDate.getDate() + 2);

		const endDateInput = document.getElementById("end-date");
		if (endDateInput) {
			endDateInput.setAttribute(
				"min",
				endDate.toISOString().split("T")[0],
			);
		}
	};

	const handleCarTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setCarType(e.target.value);
	};

	const handlePickUpLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setPickUp(e.target.value);
	};

	const handleDropOffLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setDropOf(e.target.value);
	};

	const handleSearch = () => {
		if (
			carType === "default" ||
			pickUp === "default" ||
			dropOf === "default" ||
			startDate === ""
		) {
			setOpenDialog(true);
		} else setOpenDialog(false);

		console.log("openDialog:", openDialog);
	};

	return (
		<ChooseCarStyle>
			<div className="container">
				<h1 className="bookCarTitle">Book a car</h1>
				{openDialog && (
					<div className="dialog">
						<p>Please fill all the fields</p>
					</div>
				)}
				<article className="">
					<div className="selectWrapper select-car">
						<label htmlFor="">
							<AiTwotoneCar />
							Select Your Car Type <span>*</span>
						</label>
						<select name="" id="" onChange={handleCarTypeChange}>
							<option value="default">
								Select your car type
							</option>
							{Cars.map((car, index) => (
								<option key={index} value={car.name}>
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
						<select
							name=""
							id=""
							onChange={handlePickUpLocationChange}
						>
							<option value="default">
								Select pick up location
							</option>
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
						<select
							name=""
							id=""
							onChange={handleDropOffLocationChange}
						>
							<option value="default">
								Select drop off location
							</option>
							{PickUp.map((car) => (
								<option key={car.name} value={car.name}>
									{car.name}
								</option>
							))}
						</select>
					</div>
					<div className="selectWrapper pick-up-date">
						<label htmlFor="">
							<IoCalendarOutline />
							Pick-up <span>*</span>
						</label>
						<input
							type="date"
							id="start-date"
							name="start-date"
							min={currentDate}
							onChange={handleStartDateChange}
						/>
					</div>
					<div className="selectWrapper drop-of-date">
						<label htmlFor="">
							<IoCalendarOutline />
							Drop-of <span>*</span>
						</label>
						<input
							type="date"
							id="end-date"
							name="end-date"
							min={currentDate}
						/>
					</div>
					<div className="selectWrapper search">
						<Button onClick={handleSearch}>Search</Button>
					</div>
				</article>
			</div>
		</ChooseCarStyle>
	);
};
