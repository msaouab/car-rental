export type VehicleType = {
	id: number;
	name: string;
	image: string;
	image2: string;
	price: number;
	model: string;
	mark: string;
	year: number;
	doors: number;
	ac: boolean;
	transmission: string;
	fuel: string;
};

export type TeamMembersType = {
	name: string;
	role: string;
	image: string;
	description: string;
};

export type CarsType = {
	name: string;
};

export type ProfileType = {
	quotes: string;
	img: string;
	name: string;
	city: string;
};

export type AccordionType = {
	question: string;
	answer: string;
};

export type PlanBoxType = {
	icon: string;
	title: string;
	message: string;
};

export type KpisCarProps = {
	name: string;
	key: number;
	isActive: boolean;
	onClick: () => void;
};
