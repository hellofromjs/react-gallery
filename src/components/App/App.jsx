import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../About/About";
import { buildPath } from "../../buildPath";

function App() {
	return (
		<div className="container">
			<Router>
				<Header />
				<Routes>
					<Route path={buildPath()} element={<Main />} />
					<Route path={buildPath('about')} element={<About />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
