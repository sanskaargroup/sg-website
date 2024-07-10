import { FaBarsStaggered  } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import logo from "../image/logosg.png"
import  { useRef } from 'react';
import{Link} from "react-router-dom"
import '../components/Nav.css';
const Nav = () => {
  const sidebarRef = useRef();
  

  const showSidebar = () => {
    sidebarRef.current.style.display = 'flex';  
  };

  const hideSidebar = () => {
    sidebarRef.current.style.display = 'none';
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/AboutUs"><img src={logo} alt="Sanskaar Group Logo" /></Link>
      </div>
      <div className="navbar-menu">
        <ul className="nav-list button">
          <li ><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/SocialEvents">Social Events</Link></li>
          <li><Link to="/CorporateEvents">Corporate Events</Link></li>
          <li><Link to="/Testimonial">Testimonial</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li className="contact"><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
        <button className="nav-btn menubutton" onClick={showSidebar}>
          <FaBarsStaggered />
        </button>
        <ul className="sidebar" ref={sidebarRef}>
            <li onClick={hideSidebar}><a href="#"><FaTimes size={26} /></a></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/SocialEvents">Social Events</Link></li>
            <li><Link to="/CorporateEvents">Corporate Events</Link></li>
            <li><Link to="/Testimonial">Testimonial</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li className="contact"><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
      </div>
      
    </nav>
  );
};

export default Nav;

