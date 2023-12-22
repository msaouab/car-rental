export type VehicleType = {
	id: number;
	name: string;
	image: string;
	price: number;
	brand: string;
	oilType: string;
	engineType: string;
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
