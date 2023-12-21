import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AppStyled } from "./Styled/AppStyled";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";
import { BookCarSection } from "./Components/BookCarSection";
import { Testimonials } from "./Pages/Testimonials";
import { Header } from "./Components/Header";
import { VehicleModels } from "./Pages/VehicleModels";
import { Team } from "./Pages/Team";

function App() {
	return (
		<AppStyled>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/models" element={<VehicleModels />} />
					<Route path="/Team" element={<Team />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</Router>
			<BookCarSection />
			<div className="footer">
				<Footer />
			</div>
		</AppStyled>
	);
}

export default App;
