import { ChooseCar } from "../Components/ChooseCar";
import { DiscoverCars } from "../Components/DiscoverCars";
import { FaqSection } from "../Components/FaqSection";
import { PlanSection } from "../Components/PlanSection";
import { TestimonialsCard } from "../Components/TestimonialsCard";
import { HomeStyled } from "../Styled/HomeStyled";

export const Home = () => {
	return (
		<HomeStyled>
			<ChooseCar />
			<PlanSection />
			<DiscoverCars />
			<TestimonialsCard />
			<FaqSection />
		</HomeStyled>
	);
};
