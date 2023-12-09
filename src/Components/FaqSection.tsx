import { FaqStyled } from "../Styled/FaqStyled";
import FaqCar from "/images/faq/car.png";
import { Accordion, AccordionTab } from "primereact/accordion";

const Accordiondata = [
	{
		question: "1. What is special about comparing rental car deals?",
		answer: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
	},
	{
		question: "2. How do I find the car rental deals?",
		answer: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
	},
	{
		question: "3. How do I find such low rental car prices?",
		answer: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
	},
];

export const FaqSection = () => {
	return (
		<FaqStyled className="">
			<img src={FaqCar} alt="faq car" />
			<div className="container faqContent">
				<div className="faqTitles">
					<h3>FAQ</h3>
					<h2>Frequently Asked Questions</h2>
					<p>
						Frequently Asked Questions About the Car Rental Booking
						Process on Our Website: Answers to Common Concerns and
						Inquiries.
					</p>
				</div>
				<div className="faqcard">
					<Accordion activeIndex={0}>
						{Accordiondata.map((card, index) => (
							<AccordionTab header={card.question} key={index}>
								<p className={`m-${index}`}>{card.answer}</p>
							</AccordionTab>
						))}
					</Accordion>
				</div>
			</div>
		</FaqStyled>
	);
};
