import { TbBrandWhatsapp } from "react-icons/tb";
import { BookCarStyled } from "../Styled/BookCarStyled";

export const BookCar = () => {
	return (
		<BookCarStyled>
			<div className="container">
				<p>Book a car by getting in touch with us</p>
				<p>
					<TbBrandWhatsapp /> (123) 456-7869
				</p>
			</div>
		</BookCarStyled>
	);
};
