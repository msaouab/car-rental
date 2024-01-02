import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import { FaqStyled } from "../Styled/FaqStyled";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Accordiondata } from "../_domain/Data";

export const FaqSection = () => {
	const [expanded, setExpanded] = useState<string | false>("panel1");

	const handleChange =
		(panel: string) =>
		(_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<FaqStyled className="">
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
					{Accordiondata.map((card, index) => (
						<Accordion
							expanded={expanded === `panel${index + 1}`}
							onChange={handleChange(`panel${index + 1}`)}
						>
							<AccordionSummary
								expandIcon={<IoIosArrowDown />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography>{card.question}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{card.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</div>
		</FaqStyled>
	);
};
