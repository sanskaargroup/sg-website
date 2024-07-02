import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../image/logosg.png"
import './Nav.css';
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Sanskaar Group Logo" />
        
      </div>
      <div className="navbar-menu">
        <a href="#" className="active">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Social Event</a>
        <a href="#">Corporate Event</a>
        <a href="#">Testinomial</a>
        <a href="#">Blog</a>
        <a href="#" className="contact">Contact Us</a>
      </div>
      <div className="navbar-search">
        <i className="navbar-search-icon"><FaMagnifyingGlass /></i>
      </div>
    </nav>
  );
};

export default Nav;