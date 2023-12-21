import { TeamMembersCard } from "../Components/TeamMembersCard";
import { TeamStyled } from "../Styled/TeamStyled";
import { TeamMembersType } from "../_domain/interfaces";
import member1 from "/images/team/1.png";
import member2 from "/images/team/2.png";
import member3 from "/images/team/3.png";
import member4 from "/images/team/4.png";
import member5 from "/images/team/5.png";
import member6 from "/images/team/6.png";

const TeamMembersData: TeamMembersType[] = [
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

export const Team = () => {
	return (
		<TeamStyled className="container">
			<section>
				{TeamMembersData.map((member, index) => (
					<TeamMembersCard key={index} {...member} />
				))}
			</section>
		</TeamStyled>
	);
};
