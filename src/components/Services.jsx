import {useEffect, useRef} from "react";
import "./Services.css";
import BackgroundImage from "../image/Services.gif";
import {MdOutlineEventAvailable} from "react-icons/md";
import {MdFoodBank} from "react-icons/md";
import {MdEmojiFoodBeverage} from "react-icons/md";
import {useNavigate} from "react-router-dom";

const Services = () => {
	const servicesRef = useRef([]);

	const navigate = useNavigate();

	return (
		<div className="services" style={{backgroundImage: `url(${BackgroundImage})`}}>
			<div className="services-heading">
				<h3>Available services</h3>
			</div>
			<div className="allcards">
				<div
					className="services-card"
					onClick={() => {
						window.open("https://drive.google.com/drive/folders/1tXgzD3muEulNPz7Ap2l8am6t5ssfqhWI?usp=drive_link");
					}}>
					<div className="book">
						<ul>
							<li>Manpower Requirement</li>
							<li>Transportation</li>
							<li>Concierge Services</li>
							<li>Visitor Promotion </li>
						</ul>
						<div className="card1">
							<div className="align"></div>
							<h1>
								<MdOutlineEventAvailable />
							</h1>
							<h2>Event Management</h2>
						</div>
					</div>
				</div>
				<div
					className="services-card"
					onClick={() => {
						window.open("https://drive.google.com/drive/folders/1OWG96R31sDYtddKH6jQW7U2lU_OgykO6?usp=sharing");
					}}>
					<div className="book">
						<ul>
							<li>Hospitality Management</li>
							<li>Co Organizing Shows and Events</li>
							<li>Hotel Bookings(Domestic & International) </li>
							<li>Visitor Promotion</li>
						</ul>
						<div className="card2">
							<div className="align"></div>
							<h1>
								<MdFoodBank />
							</h1>
							<h2>Hospitality and F&B</h2>
						</div>
					</div>
				</div>
				<div
					className="services-card"
					onClick={() => {
						window.open("https://drive.google.com/drive/folders/1C6TbezJmDzLYpyIwGSmuPiixrVQPh79g?usp=drive_link");
					}}>
					<div className="book">
						<ul>
							<li>Customized Menu Planning</li>
							<li>High-Quality Ingredients</li>
							<li>Elegant Presentation </li>
							<li>Beverage Services </li>
						</ul>
						<div className="card3">
							<div className="align"></div>
							<h1>
								<MdEmojiFoodBeverage />
							</h1>
							<h2>Catering Services</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
