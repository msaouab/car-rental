import {
	AccordionType,
	CarsType,
	PlanBoxType,
	ProfileType,
} from "./interfaces";
import harryPotter from "/images/testimonials/pfp1.jpg";
import ronRizzly from "/images/testimonials/pfp2.jpg";
import SelectIcon from "/images/plan/icon1.png";
import ContactIcon from "/images/plan/icon2.png";
import DriveIcon from "/images/plan/icon3.png";
import { TeamMembersType } from "../_domain/interfaces";
import member1 from "/images/team/1.png";
import member2 from "/images/team/2.png";
import member3 from "/images/team/3.png";
import member4 from "/images/team/4.png";
import member5 from "/images/team/5.png";
import member6 from "/images/team/6.png";
import CarImg1 from "/images/cars-big/audi-box.png";
import CarImg2 from "/images/cars-big/golf6-box.png";
import CarImg3 from "/images/cars-big/toyota-box.png";
import CarImg4 from "/images/cars-big/bmw-box.png";
import CarImg5 from "/images/cars-big/benz-box.png";
import CarImg6 from "/images/cars-big/passat-box.png";
import { VehicleType } from "../_domain/interfaces";

export const Cars: CarsType[] = [
	{
		name: "Audi A1 S-Line",
	},
	{
		name: "VW Golf 6",
	},
	{
		name: "Toyota Camry",
	},
	{
		name: "BMW 320 ModernLine",
	},
	{
		name: "Mercedes-Benz GLK",
	},
	{
		name: "VW Passat CC",
	},
];

export const PickUp: CarsType[] = [
	{
		name: "Belgrade",
	},
	{
		name: "Novi Sad",
	},
	{
		name: "Nis",
	},
	{
		name: "Kragujevac",
	},
	{
		name: "Subotica",
	},
];

export const profile: ProfileType[] = [
	{
		quotes: '"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."',
		img: harryPotter,
		name: "Harry Potter",
		city: "Belgrade",
	},
	{
		quotes: '"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"',
		img: ronRizzly,
		name: "Ron Rizzly",
		city: "Novi Sad",
	},
];

export const Accordiondata: AccordionType[] = [
	{
		question: "1. What is special about comparing rental car deals?",
		answer: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
	},
	{
		question: "2. How do I find the car rental deals?",
		answer: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
	},
	{
		question: "3. How do I find such low rental car prices?",
		answer: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
	},
];

export const planBoxes: PlanBoxType[] = [
	{
		icon: SelectIcon,
		title: "Select Car",
		message:
			"We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.",
	},
	{
		icon: ContactIcon,
		title: "Contact Operator",
		message:
			"Our knowledgeable and friendly operators are always ready to help with any questions or concerns.",
	},
	{
		icon: DriveIcon,
		title: "Let's Drive",
		message:
			"Whether you're hitting the open road, we've got you covered with our wide range of cars.",
	},
];

export const TeamMembersData: TeamMembersType[] = [
	{
		name: "Luke Miller",
		role: "Salesman",
		image: member1,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae nisi vitae urna aliq",
	},
	{
		name: "Michael Diaz",
		role: "Business Owner",
		image: member2,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae nisi vitae urna aliq",
	},
	{
		name: "Briana Ross",
		role: "Photographer",
		image: member3,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae nisi vitae urna aliq",
	},
	{
		name: "Lauren Rivera",
		role: "Car Detailist",
		image: member4,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae nisi vitae urna aliq",
	},
	{
		name: "Martin Rizz",
		role: "Mechanic",
		image: member5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae nisi vitae urna aliq",
	},
	{
		name: "Caitlyn Hunt",
		role: "Menager",
		image: member6,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae nisi vitae urna aliq",
	},
];

export const VehicleData: VehicleType[] = [
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
