import { useState } from "react";
import { VehicleData } from "../_domain/Data";
import { KpisCar } from "./KpisCar";
import "../Styled/ChooseUsCardStyle.css";
import { Button } from "./Button";

export const ChooseUsCard = () => {
	const [isActive, setIsActive] = useState(0);

	const handleKpiClick = (index: number) => {
		setIsActive(index);
	};

	return (
		<article className="kpisArticle container">
			<aside className="kpis">
				{VehicleData.map((vehicle, index) => (
					<KpisCar
						name={vehicle.name}
						key={index}
						isActive={index === isActive}
						onClick={() => handleKpiClick(index)}
					/>
				))}
			</aside>
			<aside className="kpisView">
				<img
					src={VehicleData[isActive].image2}
					alt={VehicleData[isActive].name}
				/>
			</aside>
			<aside className="kpisInfo">
				<div className="headTable">
					<p>
						<span>${VehicleData[isActive].price}</span> / rent per
						day
					</p>
				</div>
				<div className="bodyTable table">
					<p className="titleType">Model</p>
					<span className="Vline"></span>
					<p className="titleValue">{VehicleData[isActive].name}</p>
				</div>
				<div className="bodyTable table">
					<p className="titleType">Mark</p>
					<span className="Vline"></span>
					<p className="titleValue">{VehicleData[isActive].mark}</p>
				</div>
				<div className="bodyTable table">
					<p className="titleType">Year</p>
					<span className="Vline"></span>
					<p className="titleValue">{VehicleData[isActive].year}</p>
				</div>
				<div className="bodyTable table">
					<p className="titleType">Doors</p>
					<span className="Vline"></span>
					<p className="titleValue">{VehicleData[isActive].doors}</p>
				</div>
				<div className="bodyTable table">
					<p className="titleType">AC</p>
					<span className="Vline"></span>
					<p className="titleValue">{VehicleData[isActive].ac === true ? "Yes" : "No"}</p>
				</div>
				<div className="bodyTable table">
					<p className="titleType">Transmission</p>
					<span className="Vline"></span>
					<p className="titleValue">{VehicleData[isActive].transmission}</p>
				</div>
				<div className="bodyTable table">
					<p className="titleType">Fuel</p>
					<span className="Vline"></span>
					<p className="titleValue">{VehicleData[isActive].fuel}</p>
				</div>
				<Button className="btnReserveNow">RESERVE NOW</Button>
			</aside>
		</article>
	);
};
