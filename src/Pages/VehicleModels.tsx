import { VehicleModelsStyled } from "../Styled/VehicleModelsStyled";

import { CarCards } from "../Components/CarCards";
import { VehicleData } from "../_domain/Data";

export const VehicleModels = () => {
	return (
		<VehicleModelsStyled className="container">
			{VehicleData.map((car, index) => (
				<CarCards key={index} {...car} />
			))}
		</VehicleModelsStyled>
	);
};
