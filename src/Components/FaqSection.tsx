import { FaqStyled } from "../Styled/FaqStyled";
// import { Accordiondata } from "../_domain/Data";
import FaqCar from "/images/faq/car.png";

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
				{/* <div className="faqcard">
					<Accordion activeIndex={0}>
						{Accordiondata.map((card, index) => (
							<AccordionTab header={card.question} key={index}>
								<p className={`m-${index}`}>{card.answer}</p>
							</AccordionTab>
						))}
					</Accordion>
				</div> */}
			</div>
		</FaqStyled>
	);
};
