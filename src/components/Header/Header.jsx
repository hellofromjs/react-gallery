import { Link } from "react-router-dom";
import { buildPath } from "../../buildPath";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light mt-2">
			<div className="container-fluid">
				<Link to={buildPath()} className="navbar-brand">
					Photo Gallery
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
						<li className="nav-item">
							<Link to={buildPath('about')} className="nav-link" aria-current="page">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
