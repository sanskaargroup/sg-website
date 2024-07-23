import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./components/Header.css";
import "./components/Nav.css";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Aboutusmain from "./pages/Aboutmain"
import Servicesmain from "./pages/Servicesmain"
import Socialevent from "./pages/Socialeventmain"
import Corporateevent from "./pages/Corporateeventmain"
import Testimonialmain from "./pages/Testimonialmain"
import Blogmain from "./pages/Blogmain"
import Contactusmain from "./pages/Contactusmain"
import Spinner from "./components/Spinner";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
  
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div>
      {loading && <Spinner />}
      <div className={loading ? "hidden" : ""}>
        <Nav/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/AboutUs" element = {<Aboutusmain/>}/>
          <Route path="/Services" element = {<Servicesmain/>}/>
          <Route path="/SocialEvents" element = {<Socialevent/>}/>
          <Route path="/CorporateEvents" element = {<Corporateevent/>}/>
          <Route path="/Testimonial" element = {<Testimonialmain/>}/>
          <Route path="/Blog" element = {<Blogmain/>}/>
          <Route path="/ContactUs" element = {<Contactusmain/>}/>
        </Routes>
        <div>
        <Footer />
      </div>
      </div>
      
    </div>
  )
}

// export default App
