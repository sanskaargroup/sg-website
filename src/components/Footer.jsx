import "./Footer.css";
import logo from "../image/logo.png";
import {Link} from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-about">
					<h3>ABOUT</h3>
					<img className="footer-logo" src={logo} alt="Sanskaar Group Logo" />
					<p>
						Sanskaar came into existence in 2013. Sanskaar is a company known for its personalized service to clients.
						We provide end-to-end solutions for all kinds of events.
					</p>
				</div>
				<div className="footer-recent-post">
					<h3>RECENT POSTS</h3>
					<ul>
						<li>
							<a href="/blog" style={{textDecoration: "none", color: "inherit"}}>
								Wedding Cards printing services in...
							</a>
						</li>
						<li>
							<a href="/blog" style={{textDecoration: "none", color: "inherit"}}>
								Best bridal makeup services in Delhi...
							</a>
						</li>
						<li>
							<a href="/blog" style={{textDecoration: "none", color: "inherit"}}>
								Wedding dress markets in Delhi & NCR...
							</a>
						</li>
						<li>
							<a href="/blog" style={{textDecoration: "none", color: "inherit"}}>
								Pre-Wedding Shoot in Delhi & NCR...
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-navi">
					<h3>QUICK LINKS</h3>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/AboutUs">About Us</Link>
						</li>
						<li>
							<Link to="/Services">Services</Link>
						</li>
						<li>
							<Link to="/Testimonial">Testimonial</Link>
						</li>
						<li>
							<Link to="/Blog">Blog</Link>
						</li>
						<li>
							<Link to="/careers">Careers</Link>
						</li>
						<li className="contact">
							<Link to="/ContactUs">Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="footer-contact">
					<h3>CONTACT US</h3>
					<div className="foot-us">
						<div className="foot-map">
							<iframe
								width="300"
								height="150"
								frameBorder="0"
								scrolling="no"
								marginHeight="0"
								marginWidth="0"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3431.1949997408283!2d77.388414!3d28.563782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44eb7bf4559%3A0xeaeee3997b80bd80!2sIITL%20Nimbus%20The%20Hyde%20Park%20Noida!5e1!3m2!1sen!2sus!4v1724526739218!5m2!1sen!2sus">
								<a href="https://www.gps.ie/">gps tracker sport</a>
							</iframe>
						</div>
						<div className="foot-cont">
							<div className="foot-add">
								<logo />
								<p>J-104, FF , IITL NIMBUS, The Hyde Park, Sector-78, Noida -201301</p>
							</div>
							<div className="foot-mail">
								<email />
								<p>
									<a href="mailto:info@sanskaargroup.com">info@sanskaargroup.com</a>
								</p>
							</div>
							<div className="foot-phone">
								<pbone />
								<p>
									<a href="tel:+919999482332">+9199994 82332</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-end">
				<div className="copyright">
					<p>
						&copy; Copyrights <b>Sanskaar Group</b> 2018. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
