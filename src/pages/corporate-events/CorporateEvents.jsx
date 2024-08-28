import BackgroundImage from "../../image/s7.jpg";
import BackgroundImage1 from "../../image/animate.gif";
import year1 from "../../image/header1.jpg";
import year0 from "../../image/event.jpg";
import year2 from "../../image/event1.jpg";
import year3 from "../../image/event2.jpg";
import image1 from "../../image/image1.jpg";
import image2 from "../../image/image2.jpg";
import image3 from "../../image/image3.jpg";
import image4 from "../../image/image4.jpg";
import image5 from "../../image/image5.jpg";
import image6 from "../../image/image6.jpg";
import image7 from "../../image/image7.jpg";
import image8 from "../../image/image8.jpg";

import "./CorporateEvents.css";
const CorporateEvents = () => {
	return (
		<div className="ceall" style={{backgroundImage: `url(${BackgroundImage1})`}}>
			<div className="corporate-event">
				<div className="head" style={{backgroundImage: `url(${BackgroundImage})`}}>
					<h1>Corporate Event</h1>
				</div>
				<div className="line"></div>
				<div className="ce-intro">
					<h2>Corporate Events to our Credit pertaining to Co Organizing the Event:</h2>
				</div>
				<div className="year-wise">
					<div className="year0 , eventcard">
						<div className="year-intro">
							<div className="line-intro"></div>
							<h3>2016-2017</h3>
							<div className="line-intro"></div>
						</div>
						<div className="year0-content">
							<img src={year0} alt="" />
							<ul>
								<li>INDIA PHARMA 2016</li>
								<li>INDIA HOSPITAL SUMMIT 2016</li>
								<li>ADVANTAGE HEALTHCARE INDIA 2016</li>
								<li>INDIA HOSPITAL SUMMIT 2017</li>
								<li>INDIA PHARMA 2017</li>
								<li>INDIA MEDICAL DEVICE EXPO 2017</li>
								<li>AAJEEVIKA 2017</li>
								<li>GES 2017</li>
								<li>INDIA -- AFRICA HEALTH CO- OPERATION PROGRAM 2017</li>
								<li>INDIA INTEGRATED LOGISTICS & TRANSPORT SUMMIT 2017</li>
								<li>ADVANTAGE HEALTHCARE INDIA 2017</li>
								<li>BIRTH CENTENARY CELEBRATIONS OF NANAJI DESHMUKH 2017</li>
								<li>HES 2017</li>
								<li>INTERNATIONAL AROGYA 2017</li>
								<li>EIMA AGRIMACH 2017</li>
							</ul>
						</div>
					</div>
					<div className="year1 , eventcard">
						<div className="year-intro">
							<div className="line-intro"></div>
							<h3>2017-2018</h3>
							<div className="line-intro"></div>
						</div>
						<div className="year0-content">
							<img src={year1} alt="" />
							<ul>
								<li>India – Kyrgyz Health Co – Operation Programme 2017Bishkek, Kyrgyzstan</li>
								<li>Medex 2017Yangon, Myanmar</li>
								<li>Namaskar Africa 2017: Ghana</li>
								<li>Oman Health Exhibition and Conference 2018Muscat, Oman</li>
								<li>INDIA PHARMA 2018</li>
								<li>INDIA MEDICAL DEVICE EXPO 2018</li>
								<li>Mtech Kiev 2018: Kiev, Ukraine</li>
								<li>
									<a
										href="https://drive.google.com/drive/folders/1Ca-htIE_7IxIlyDVqbTAr3FBg2Cvr2Gd?usp=sharing"
										target="_blank">
										Hestourex 2018 Antalya, Turkey
									</a>
								</li>
								<li>International Conference on Medical Tourism 2018: Tehran, Iran</li>
								<li>WED 2018</li>
								<li>IPHEX 2018</li>
							</ul>
						</div>
					</div>
					<div className="year2 , eventcard">
						<div className="year-intro">
							<div className="line-intro"></div>
							<h3>2018-2019</h3>
							<div className="line-intro"></div>
						</div>
						<div className="year0-content">
							<img src={year2} alt="" />
							<ul>
								<li>Hestourex 2019: Antalya, Turkey</li>
								<li>Namaskar Africa 2019: Kenya and Tanzania</li>
								<a
									href="https://drive.google.com/drive/folders/1emqr9jqn9vwMk5UHNdDISVOZWSraZICh?usp=sharing"
									target="_blank">
									<li>ExpoMed 2019: Batumi, Georgia</li>
								</a>
								<li>Oman Health Exhibition and Conference 2019Muscat, Oman</li>
								<li>Mtech 2019Kiev, Ukraine</li>
								<li>2nd Medical Tourism Asia Summit 2019Kathmandu, Nepal</li>
								<li>L SUMMIT 2018</li>
								<li>KRISHI UNNATI 2018</li>
								<li>ADVANTAGE HEALTHCARE INDIA 2018</li>
								<li>AILBS 2019</li>
								<li>COP 14</li>
								<li>Advantage Healthcare India 2019</li>
								<li>International Arogya 2019</li>
							</ul>
						</div>
					</div>
					<div className="year3 , eventcard">
						<div className="year-intro">
							<div className="line-intro"></div>
							<h3>2023-2024</h3>
							<div className="line-intro"></div>
						</div>
						<div className="year0-content">
							<img src={year3} alt="" />
							<ul>
								<li>Manthan (at Bangalore) 2023</li>
								<li>Higher Education Submit 2023</li>
								<li>Road Safety at Pusa 2023</li>
								<li>India Steel 2023</li>
								<li>G20 Bangalore 2023</li>
								<li>G20 Gandhinagar 2023</li>
								<li>G20 Mumbai 2023</li>
								<li>World Food India 2023</li>
								<li>Stonemart 2024 at Jaipur</li>
								<li>Bharattech 2024 at Delhi</li>
								<li>EIMA AGRIMACH at Bangalore 2024</li>
							</ul>
						</div>
					</div>
					<div className="gallery">
						<h3>Glimpse of events</h3>
						<div className="sevent-images">
							<img src={image1} alt="" />
							<img src={image4} alt="" />
							<img src={image7} alt="" />
							<img src={image2} alt="" />
							<img src={image5} alt="" />
							<img src={image8} alt="" />
							<img src={image3} alt="" />
							<img src={image6} alt="" />
						</div>
						<button>
							<span className="shadow"></span>
							<span className="edge"></span>
							<span className="front text"> See more</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CorporateEvents;
