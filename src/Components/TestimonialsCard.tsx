import { TestimonialsCardStyle } from "../Styled/TestimonialsCardStyle";
import { Cards } from "./Cards";

export const TestimonialsCard = () => {
	return (
		<TestimonialsCardStyle>
			<div className="container TestimonialsCardStyle">
				<h3>Reviewed by People</h3>
				<h2>Client's Testimonials</h2>
				<p>
					Discover the positive impact we've made on the our clients
					by reading through their testimonials. Our clients have
					experienced our service and results, and they're eager to
					share their positive experiences with you.
				</p>
				<Cards />
			</div>
		</TestimonialsCardStyle>
	);
};
