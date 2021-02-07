import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

library.add(faTimes);
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<Homepage />
				</Route>{" "}
				<Route path="/about" exact>
					<About></About>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
