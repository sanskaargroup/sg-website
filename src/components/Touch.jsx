import "./Touch.css";
import BackgroundImage from "../image/T2.jpg";
import {useNavigate} from "react-router-dom";
const Touch = () => {
	const navigate = useNavigate();
	return (
		<div className="touch-container" style={{backgroundImage: `url(${BackgroundImage})`}}>
			<div className="touch-box">
				<h2>Get in Touch With Us!</h2>
				<p>Ask questions, schedule a meeting or request a proposal. Lets Get Started</p>
				<button
					className="touch-button"
					onClick={() => {
						navigate("/contactus");
					}}>
					Contact Us Now
				</button>
			</div>
			<div className="touch-box">
				<h2>Want To Work With Us!</h2>
				<p>If you are talented enough, then join our team and have a bright future</p>
				<button
					className="touch-button"
					onClick={() => {
						navigate("/careers");
					}}>
					Join Our Team
				</button>
			</div>
		</div>
	);
};

export default Touch;
