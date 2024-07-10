import "./App.css";
import {  Route , Routes } from "react-router-dom";
import "./components/Header.css";
import "./components/Nav.css";
import Nav from "./components/Nav"
// import Header from "./components/Header"
// import About from "./components/About"
// import Services from "./components/Services"
// import Tagline from "./components/Tagline"
// import Portfolio from "./components/Portfolio"
// import Portfolio1 from "./components/Portfolio1"
// import Portfolio2 from "./components/Portfolio2"
// import Touch from "./components/Touch"
// import Thought from "./components/Thought"
// import ContactForm from "./components/ContactForm"
// import Team from "./components/Team"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Aboutusmain from "./pages/Aboutmain"
import Servicesmain from "./pages/Servicesmain"
import Socialevent from "./pages/Socialeventmain"
import Corporateevent from "./pages/Corporateeventmain"
import Testimonialmain from "./pages/Testimonialmain"
import Blogmain from "./pages/Blogmain"
import Contactusmain from "./pages/Contactusmain"

export default function App() {
  return (
    <div>
      
      <div className="Nav">
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

// export default App
