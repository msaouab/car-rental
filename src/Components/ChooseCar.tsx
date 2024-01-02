import { AiTwotoneCar } from "react-icons/ai";
import { ChooseCarStyle } from "../Styled/ChooseCarStyle";
import { Button } from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarOutline, IoClose } from "react-icons/io5";
import { Cars, PickUp } from "../_domain/Data";
import { useState } from "react";
import { ChangeEvent } from "react";
import { BookDialog } from "./BookDialog";

export const ChooseCar = () => {
	const currentDate = new Date().toISOString().split("T")[0];
	const [startDate, setStartDate] = useState(currentDate);
	const [carType, setCarType] = useState("default");
	const [pickUp, setPickUp] = useState("default");
	const [dropOf, setDropOf] = useState("default");
	const [openDialog, setOpenDialog] = useState(false);
	const [showEmptyField, setShowEmptyField] = useState(false);

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
			setOpenDialog(false);
			setShowEmptyField(true);
		} else setOpenDialog(true);
	};

	return (
		<ChooseCarStyle>
			<div className="container">
				<h1 className="bookCarTitle">Book a car</h1>
				{!openDialog && showEmptyField && (
					<div className="emptyField">
						<p>Please fill all the fields</p>
						<span>
							<IoClose />
						</span>
					</div>
				)}
				<article className="">
					<div className="selectWrapper select-car">
						<label htmlFor="carType" id="selectCar">
							<AiTwotoneCar />
							Select Your Car Type <span>*</span>
						</label>
						<select
							name="carType"
							id="carType"
							onChange={handleCarTypeChange}
						>
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
						<label htmlFor="pickUpType" id="PickUpCar">
							<FaLocationDot />
							Pick-up <span>*</span>
						</label>
						<select
							name="pickUpType"
							id="pickUpType"
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
						<label htmlFor="drop-Off" id="dropOfLocation">
							<FaLocationDot />
							Drop-of <span>*</span>
						</label>
						<select
							name="drop-Off"
							id="drop-Off"
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
						<label htmlFor="start-date" id="PickUp-Date">
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
						<label htmlFor="end-date" id="dropOfDate">
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
					{openDialog && <BookDialog OpenDialog={openDialog} />}
				</article>
			</div>
		</ChooseCarStyle>
	);
};
