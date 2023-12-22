import { TeamMembersCard } from "../Components/TeamMembersCard";
import { TeamStyled } from "../Styled/TeamStyled";
import { TeamMembersData } from "../_domain/Data";

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
