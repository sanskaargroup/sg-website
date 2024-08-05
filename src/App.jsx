import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./components/Header.css";
import "./components/Nav.css";


import Nav from "./components/Nav"
import Footer from "./components/Footer"

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import SocialEvents from "./pages/social-events/Socialevent";
import CorporateEvents from "./pages/corporate-events/CorporateEvents";
import Testimonials from "./pages/testimonials/Testimonials";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact-us/Contact";
import Spinner from "./components/Spinner";
import Careers from "./pages/careers/careers";

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
        <Nav/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/AboutUs" element = {<About/>}/>
          <Route path="/Services" element = {<Services/>}/>
          <Route path="/SocialEvents" element = {<SocialEvents/>}/>
          <Route path="/CorporateEvents" element = {<CorporateEvents/>}/>
          <Route path="/Testimonial" element = {<Testimonials/>}/>
          <Route path="/Blog" element = {<Blog/>}/>
          <Route path="/ContactUs" element = {<Contact/>}/>
          <Route path="/careers" element = {<Careers/>}/>
        </Routes>
        <div>
        <Footer />
      </div>
      </div>
      
    </div>
  )
}

// export default App
