import { ChooseUsCard } from "./ChooseUsCard";

export const DiscoverCars = () => {
	return (
		<section>
			<article className="container HeadSection">
				<div className="subsection">
					<h3>Vehicle Models</h3>
					<h2>Our rental fleet</h2>
				</div>
				<p>
					Choose from a variety of our amazing vehicles to rent for
					your next adventure or business trip
				</p>
			</article>
			<ChooseUsCard />
		</section>
	);
};
