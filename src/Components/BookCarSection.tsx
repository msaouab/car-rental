import { TbBrandWhatsapp } from "react-icons/tb";
import { BookCarStyled } from "../Styled/BookCarStyled";

export const BookCarSection = () => {
	return (
		<BookCarStyled>
			<div className="container">
				<h2 className="book-car">Book a car by getting in touch with us</h2>
				<h2>
					<TbBrandWhatsapp /> (123) 456-7869
				</h2>
			</div>
		</BookCarStyled>
	);
};
