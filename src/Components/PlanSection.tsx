import { PlanSectionStyled } from "../Styled/PlanStyled";
import { planBoxes } from "../_domain/Data";

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
							<p>{planBox.message}</p>
						</div>
					))}
				</div>
			</div>
		</PlanSectionStyled>
	);
};
