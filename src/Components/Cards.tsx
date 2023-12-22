import { CardsStyle } from "../Styled/CardsStyle";
import { profile } from "../_domain/Data";

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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="tabler-icon tabler-icon-quote"
						>
							<path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
							<path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
						</svg>
					</div>
				</div>
			))}
		</CardsStyle>
	);
};
