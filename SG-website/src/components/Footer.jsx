import './Footer.css';
import logo from "../image/logo.png";
import{Link} from "react-router-dom"

const Footer = () => {
  return (
    // <div className='last'>
    //   <footer className="footer">
    //     <div className="footer-container">
    //       <div className="row">
    //         <div className="col-md-4 about">
    //           <h2>About Us</h2>
    //           <img className='img' src={logo} alt="Sanskaar Group Logo" />
    //           <p>Sanskaar came into existence in 2013. Sanskaar is a company known for its personalized service to clients. We provide end-to-end solutions for all kinds of events.</p>
    //         </div>

    //         <div className="col-md-4 recent-posts">
    //           <h2>Recent Posts</h2>
    //           <ul>
    //             <li><a href="#">Wedding Cards printing services i...</a></li>
    //             <li><a href="#">Best bridal makeup services in Del...</a></li>
    //             <li><a href="#">Wedding dress markets in Delhi &...</a></li>
    //             <li><a href="#">Pre-Wedding Shoot in Delhi & NC...</a></li>
    //           </ul>
    //         </div>

    //         <div className="mini-navbar">
    //         <div className="footer-container">
    //           <ul>
    //             <li><a href="#">Home</a></li>
    //             <li><a href="#">About</a></li>
    //             <li><a href="#">Services</a></li>
    //             <li><a href="#">Blog</a></li>
    //             <li><a href="#">Contact</a></li>
    //           </ul>
    //         </div>
    //         </div>
            
    //         <div className="col-md-4 contact-us">
    //           <h2>Contact Us</h2>
    //           <ul>
    //             <li>
    //             
    //               <i className="fa fa-map-marker"></i>
    //               <p>J-104, FF , IITL NIMBUS, The Hyde Park, Sector-78, Noida -201301</p>
    //             </li>
    //             <li>
    //               <i className="fa fa-envelope"></i>
    //               <p><a href="mailto:info@sanskaargroup.com">info@sanskaargroup.com</a></p>
    //             </li>
    //             <li>
    //               <i className="fa fa-phone"></i>
    //               <p><a href="tel:+919999482332">(+91) 9999482332</a></p>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    //   
    // </div>

    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-about'>
          <h3>ABOUT</h3>
          <img className='footer-logo' src={logo} alt="Sanskaar Group Logo" />
          <p>Sanskaar came into existence in 2013. Sanskaar is a company known for its  personalized service to clients. We provide end-to-end solutions for all kinds of events.</p>
        </div>
        <div className='footer-recent-post'>
          <h3>RECENT POSTS</h3>
           <ul>
             <li>Wedding Cards printing services i...</li>
             <li>Best bridal makeup services in Del...</li>
             <li>Wedding dress markets in Delhi &...</li>
             <li>Pre-Wedding Shoot in Delhi & NC...</li>
           </ul>
        </div>
        <div className='footer-navi'>
          <h3>QUICK LINKS</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Testimonial">Testimonial</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li className="contact"><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>
        <div className='footer-contact'>
        <h3>CONTACT US</h3>
          <div className='foot-us'>
          <div className='foot-map'>
          <iframe width="300" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=320&amp;height=200&amp;hl=en&amp;q=IITL%20NIMBUS%20THE%20HYDE%20PARK%20Sector%2078%20Noida,%20Uttar%20Pradesh%20201305+(Sanskaar%20Group)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
          </div>
          <div className='foot-cont'>
            <div className='foot-add'>
              <logo/>
              <p>J-104, FF , IITL NIMBUS, The Hyde Park, Sector-78, Noida -201301</p>
            </div>
            <div className='foot-mail'>
              <email/>
              <p><a href="mailto:info@sanskaargroup.com">info@sanskaargroup.com</a></p>
            </div>
            <div className='foot-phone'>
              <pbone/>
              <p><a href="tel:+919999482332">+9199994 82332</a></p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='footer-end'>
        <div className="copyright">
          <p>&copy; Copyrights <b>Sanskaar Group</b> 2018. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
