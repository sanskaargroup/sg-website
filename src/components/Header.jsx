import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import BackgroundImage1 from "../image/header4.jpg";
import BackgroundImage2 from "../image/header1.jpg";
import BackgroundImage3 from "../image/header3.jpg";
import BackgroundImage4 from "../image/header2.jpg";
import TrackVisibility from "react-on-screen";
import BackgroundVideo from "../image/header.mp4";
import "./Header.css";

export const Header = () => {
	// const [loopNum, setLoopNum] = useState(0);
	// const [isDeleting, setIsDeleting] = useState(false);
	// const [text, setText] = useState("");
	// const [delta, setDelta] = useState(300 - Math.random() * 100);
	// const [index, setIndex] = useState(1);
	// const toRotate = ["Welcome to Sanskaar Group", "We handle   You make memories"];
	// const period = 2000;

	// useEffect(() => {
	// 	let ticker = setInterval(() => {
	// 		tick();
	// 	}, delta);

	// 	return () => {
	// 		clearInterval(ticker);
	// 	};
	// }, [text]);

	// const tick = () => {
	// 	let i = loopNum % toRotate.length;
	// 	let fullText = toRotate[i];
	// 	let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

	// 	setText(updatedText);

	// 	if (isDeleting) {
	// 		setDelta((prevDelta) => prevDelta / 2);
	// 	}

	// 	if (!isDeleting && updatedText === fullText) {
	// 		setIsDeleting(true);
	// 		setIndex((prevIndex) => prevIndex - 1);
	// 		setDelta(period);
	// 	} else if (isDeleting && updatedText === "") {
	// 		setIsDeleting(false);
	// 		setLoopNum(loopNum + 1);
	// 		setIndex(1);
	// 		setDelta(500);
	// 	} else {
	// 		setIndex((prevIndex) => prevIndex + 1);
	// 	}
	// };
  
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(200); // Initial typing speed
	const toRotate = ["Welcome to Sanskaar Group", "We handle   You make memories"];
	const typingSpeed = 150;
	const deletingSpeed = 100;
	const period = 2000;

	useEffect(() => {
		const ticker = setInterval(() => {
			tick();
		}, delta);

		return () => clearInterval(ticker);
	}, [text, delta, isDeleting]);

	const tick = () => {
		const i = loopNum % toRotate.length;
		const fullText = toRotate[i];
		const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (!isDeleting && updatedText === fullText) {
			setTimeout(() => setIsDeleting(true), period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(typingSpeed); // Reset typing speed after deletion
		} else if (isDeleting) {
			setDelta(deletingSpeed);
		} else {
			setDelta(typingSpeed);
		}
	};
	return (
		<section className="banner" id="home">
			<Container className="container">
				<Row className="align-items-center">
					<video autoPlay loop muted className="background-video">
						<source src={BackgroundVideo} type="video/mp4" />
					</video>
					<Col>
						<TrackVisibility>
							{({isVisible}) => (
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<h1>
										{` `}{" "}
										<span
											className="txt-rotate"
											dataPeriod="1000"
											data-rotate='[ "Welcome to Sanskaar Group", "We handle   You make memories" ]'>
											<span className="wrap">{text}</span>
										</span>
									</h1>
									<p>
										Established in 2013, Sanskaar is renowned for its personalized event management services, catering
										to corporate and social events. With fully-equipped in-house production facilities and offices in
										Noida and Gurugram, our global presence in the Middle East and CIS countries enables us to deliver
										exceptional, tailor-made event solutions, ensuring every event is a success.
									</p>
									<button className="learn-more">
										<span className="circle" aria-hidden="true">
											<span className="icon arrow"></span>
										</span>
										<span className="button-text">Know more</span>
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col>
						<div className="h-card">
							<TrackVisibility>
								{({isVisible}) => (
									<div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
										<div className="imagemain">
											<div
												className="card"
												id="c1"
												style={{
													backgroundImage: `url(${BackgroundImage1})`,
													objectFit: "cover",
													backgroundPosition: "center",
													backgroundSize: "cover",
												}}></div>
											<div
												className="card"
												id="c2"
												style={{
													backgroundImage: `url(${BackgroundImage2})`,
													objectFit: "cover",
													backgroundPosition: "center",
													backgroundSize: "cover",
												}}></div>
											<div
												className="card"
												id="c3"
												style={{
													backgroundImage: `url(${BackgroundImage3})`,
													objectFit: "cover",
													backgroundPosition: "center",
													backgroundSize: "cover",
												}}></div>
											<div
												className="card"
												id="c4"
												style={{
													backgroundImage: `url(${BackgroundImage4})`,
													objectFit: "cover",
													backgroundPosition: "center",
													backgroundSize: "cover",
												}}></div>
										</div>
									</div>
								)}
							</TrackVisibility>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default Header;
