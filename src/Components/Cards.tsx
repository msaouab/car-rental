import { CardsStyle } from "../Styled/CardsStyle";
import { profile } from "../_domain/Data";
// import QuotesIcon from "../assets/svg/QuotesIcon.svg";

import { IconQuote } from "@tabler/icons-react";
export const Cards = () => {
	return (
		<CardsStyle>
			{profile.map((item, index) => (
				<div key={index} className="card">
					<p>{item.quotes}</p>
					<div className="Profile">
						<div className="imgContainer">
							<img src={item.img} alt="profile" />
							<p>
								{item.name}
								<span>{item.city}</span>
							</p>
						</div>
						<IconQuote width={60} height={60} />
					</div>
				</div>
			))}
		</CardsStyle>
	);
};
