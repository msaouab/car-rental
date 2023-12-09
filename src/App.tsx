import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { AppStyled } from "./Styled/AppStyled";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";
import { BookCarSection } from "./Components/BookCarSection";
import { Testimonials } from "./Pages/Testimonials";

function App() {
	return (
		<AppStyled>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="testimonials" element={<Testimonials />} />
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
