import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg justify-content-center bg-dark">
			<ul className="nav">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link">
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
