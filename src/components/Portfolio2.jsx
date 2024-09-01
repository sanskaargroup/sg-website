import {useNavigate} from "react-router-dom";
import "./Portfolio2.css";

const Portfolio2 = () => {
	const navigate = useNavigate();
	return (
		<div className="portfolio-container">
			<h2>See Our Full Portfolio of Events</h2>
			<button
				className="animated-button"
				onClick={() => {
					navigate("/gallery");
				}}>
				Visit Full Portfolio
			</button>
		</div>
	);
};

export default Portfolio2;
