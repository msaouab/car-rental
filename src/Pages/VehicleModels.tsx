import { VehicleModelsStyled } from "../Styled/VehicleModelsStyled";
import CarImg1 from "/images/cars-big/audi-box.png";
import CarImg2 from "/images/cars-big/golf6-box.png";
import CarImg3 from "/images/cars-big/toyota-box.png";
import CarImg4 from "/images/cars-big/bmw-box.png";
import CarImg5 from "/images/cars-big/benz-box.png";
import CarImg6 from "/images/cars-big/passat-box.png";
import { CarCards } from "../Components/CarCards";
import { VehicleType } from "../_domain/interfaces";

const VehicleData: VehicleType[] = [
	{
		id: 1,
		name: "Audi A1",
		image: CarImg1,
		price: 45,
		brand: "Audi",
		oilType: "Diesel",
		engineType: "Manual",
	},
	{
		id: 2,
		name: "Golf 6",
		image: CarImg2,
		price: 37,
		brand: "VW",
		oilType: "Diesel",
		engineType: "Manual",
	},
	{
		id: 3,
		name: "Toyota Camry",
		image: CarImg3,
		price: 30,
		brand: "Toyota",
		oilType: "Diesel",
		engineType: "Manual",
	},
	{
		id: 4,
		name: "BMW 320 ModernLine",
		image: CarImg4,
		price: 35,
		brand: "BMW",
		oilType: "Diesel",
		engineType: "Manual",
	},
	{
		id: 5,
		name: "Mercedes Benz GLK",
		image: CarImg5,
		price: 50,
		brand: "Mercedes",
		oilType: "Diesel",
		engineType: "Manual",
	},
	{
		id: 6,
		name: "VW Passat CC",
		image: CarImg6,
		price: 25,
		brand: "VW",
		oilType: "Diesel",
		engineType: "Manual",
	},
];

export const VehicleModels = () => {
	return (
		<VehicleModelsStyled className="container">
			{VehicleData.map((car, index) => (
				<CarCards key={index} {...car} />
			))}
		</VehicleModelsStyled>
	);
};
