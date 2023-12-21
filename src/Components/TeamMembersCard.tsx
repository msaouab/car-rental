import { TeamMembersType } from "../_domain/interfaces";

export const TeamMembersCard = (props: TeamMembersType) => {
	const { name, role, image } = props;
	return (
		<div className="cardContainer">
			<img src={image} alt={name + role} />
			<h1>{name}</h1>
			<p>{role}</p>
		</div>
	);
};
