import {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import "./App.css";
import "./components/Header.css";
import "./components/Nav.css";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Signin from "./components/Signin";
import Spinner from "./components/Spinner";
import PrivateRoute from "./components/private-routes/PrivateRoute";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Careers from "./pages/careers/careers";
import Contact from "./pages/contact-us/Contact";
import CorporateEvents from "./pages/corporate-events/CorporateEvents";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import SocialEvents from "./pages/social-events/Socialevent";
import Gallery from "./pages/Gallery/Gallery";
import Owner from "./components/private-routes/Owner";

export default function App() {
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 150);

		return () => clearTimeout(timer);
	}, [location]);
	return (
		<div>
			{loading && <Spinner />}
			<div className={loading ? "hidden" : ""}>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/AboutUs" element={<About />} />
					<Route path="/Services" element={<Services />} />
					<Route path="/SocialEvents" element={<SocialEvents />} />
					<Route path="/CorporateEvents" element={<CorporateEvents />} />
					<Route path="/Gallery" element={<Gallery />} />
					<Route path="/Blog" element={<Blog />} />
					<Route path="/ContactUs" element={<Contact />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/signin" element={<Signin />} />

					{/* <Route path="/owner" element={<PrivateRoute component={Owner} />} /> */}
					<Route path="/owner" element={<Owner />} />
				</Routes>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

// export default App
