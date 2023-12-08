import { PlanSectionStyled } from "../Styled/PlanSectionStyled";
import SelectIcon from "/images/plan/icon1.png";
import ContactIcon from "/images/plan/icon2.png";
import DriveIcon from "/images/plan/icon3.png";

const planBoxes = [
	{
		icon: SelectIcon,
		title: "Select Car",
		text: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.",
	},
	{
		icon: ContactIcon,
		title: "Contact Operator",
		text: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns.",
	},
	{
		icon: DriveIcon,
		title: "Let's Drive",
		text: "Whether you're hitting the open road, we've got you covered with our wide range of cars.",
	},
];

export const PlanSection = () => {
	return (
		<PlanSectionStyled>
			<div className="container plan">
				<div className="planTitles">
					<h3>Plan your trip now</h3>
					<h2>Quick & easy car rental</h2>
				</div>
				<div className="planBoxes">
					{planBoxes.map((planBox, index) => (
						<div className="planBox" key={index}>
							<img src={planBox.icon} alt="" />
							<h2>{planBox.title}</h2>
							<p>{planBox.text}</p>
						</div>
					))}
				</div>
			</div>
		</PlanSectionStyled>
	);
};
