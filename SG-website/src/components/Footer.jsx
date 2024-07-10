import './Footer.css';
import logo from "../image/logo.png";

const Footer = () => {
  return (
    <div className='last'>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-md-4 about">
              <h2>About Us</h2>
              <img className='img' src={logo} alt="Sanskaar Group Logo" />
              <p>Sanskaar came into existence in 2013. Sanskaar is a company known for its personalized service to clients. We provide end-to-end solutions for all kinds of events.</p>
            </div>

            <div className="col-md-4 recent-posts">
              <h2>Recent Posts</h2>
              <ul>
                <li><a href="#">Wedding Cards printing services i...</a></li>
                <li><a href="#">Best bridal makeup services in Del...</a></li>
                <li><a href="#">Wedding dress markets in Delhi &...</a></li>
                <li><a href="#">Pre-Wedding Shoot in Delhi & NC...</a></li>
              </ul>
            </div>

            <div className="col-md-4 tags">
              <h2>Tags</h2>
              <ul>
                <li><a href="#">BENEFITS YOUR WEDDING PLANNERS</a></li>
                <li><a href="#">BEST WEDDING PLANNERS</a></li>
                <li><a href="#">CORPORATE</a></li>
                <li><a href="#">TEMPLATE</a></li>
                <li><a href="#">WEDDING</a></li>
                <li><a href="#">WEDDING EVENT</a></li>
                <li><a href="#">WEDDING PLANNER</a></li>
                <li><a href="#">WEDDING PLANNERS IN DELHI & NCR</a></li>
                <li><a href="#">WEDDINGS</a></li>
                <li><a href="#">WEDDING VENUES</a></li>
              </ul>
            </div>

            <div className="col-md-4 contact-us">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <p>J-104, FF , IITL NIMBUS, The Hyde Park, Sector-78, Noida -201301</p>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <p><a href="mailto:info@sanskaargroup.com">info@sanskaargroup.com</a></p>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <p><a href="tel:+919999482332">(+91) 9999482332</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='end'>
        <div className="copyright">
          <p>&copy; Copyrights Sanskaar Group 2018. All rights reserved.</p>
          <div className="mini-navbar">
            <div className="footer-container">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
