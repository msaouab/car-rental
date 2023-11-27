import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { AppStyled } from "./Styled/AppStyled";
import { Footer } from "./Components/Footer";

function App() {
	return (
		<AppStyled className="debug">
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
			<Footer />
		</AppStyled>
	);
}

export default App;
