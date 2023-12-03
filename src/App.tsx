import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { AppStyled } from "./Styled/AppStyled";
import { Footer } from "./Components/Footer";
import { BookCar } from "./Components/BookCar";

function App() {
	return (
		<AppStyled className="debug">
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
			<BookCar />
			<div className="footer">
				<Footer />
			</div>
		</AppStyled>
	);
}

export default App;
