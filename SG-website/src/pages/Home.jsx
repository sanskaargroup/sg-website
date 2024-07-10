import "../App.css";
// import {  Route , Routes } from "react-router-dom";
import "../components/Header.css";
import "../components/Nav.css";
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Tagline from "../components/Tagline"
import Portfolio from "../components/Portfolio"
import Portfolio1 from "../components/Portfolio1"
import Portfolio2 from "../components/Portfolio2"
import Touch from "../components/Touch"
import Thought from "../components/Thought"
import ContactForm from "../components/ContactForm"
import Team from "../components/Team"

export default function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Services />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Tagline />
      </div>
      <div>
        <Portfolio1 />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Portfolio2 />
      </div>
      <div>
        <Touch />
      </div>
      <div>
        <Thought />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Team />
      </div>
    </div>
  )
}

// export default App
