import { PlanSection } from "../Components/PlanSection";
import { TestimonialsCard } from "../Components/TestimonialsCard";
import { HomeStyled } from "../Styled/HomeStyled";

export const Home = () => {
	return (
		<HomeStyled>
			<PlanSection />
			<TestimonialsCard />
			{/* <FaqSection /> */}
		</HomeStyled>
	);
};
