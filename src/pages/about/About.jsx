import './About.css';
import photo from '../../image/logosg.png';
import img from '../../image/athiti.png';
import { FaChevronDown } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-wrapper">
                <div className="about-us-title">
                    <h1>About Us</h1>
                </div>
                <div className="about-us-content">
                    <div className="about-us-left">
                        <img
                            src={photo}
                            alt="Sanskaar Logo"
                            className="about-us-image"
                        />
                    </div>
                    <div className="about-us-right">
                        <p>
                            Sanskaar came into existence in 2013. Sanskaar is a
                            company known for its personalized service to
                            clients. We provide end-to-end solutions for all
                            kinds of events – be they corporate or social.We are
                            a team with a fully developed and functional
                            in-house production facility . Our corporate offices
                            are in Noida & Gurugram . Our presence in the Middle
                            East and some CIS countries gives our work and
                            thought process a global perspective. We handle all
                            possible aspects of an event and cater to varying
                            entertainment and promotional needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="text">
                    <h2>OUR ETHOS & BELIEFS</h2>
                </div>
                <div className="icon">
                    <FaChevronDown />
                </div>
            </div>
            <div className="ethos">
                <img src={img} alt="Image" />
                <div className="text1">
                    <p>
                        God is in Details and walk an extra mile are the mantra
                        for our team. Our in-house designing & production
                        facilities are our pivotal pillars that allow us to
                        serve our clients and actualize their dreams better.
                        Sanskaar would like to be the first choice for both
                        corporate and social clients looking for unique,
                        one-of-a-kind events.
                    </p>
                    <br />
                    <h2>We belief in “ATITHI DEVO BHAVA”</h2>
                </div>
            </div>

            <div className="line"></div>

            <div className="aboutus-container">
                <header className="aboutus-header">
                    <h1>We Create Events That Lasts</h1>
                </header>
                <section className="aboutus-section">
                    <p className="aboutus-description">
                        From Wedding Functions to Corporate Events to Musical
                        Functions, We offer full range of Events Management
                        Services that scale to your needs & budget.
                    </p>
                    <div className="aboutus-grid">
                        <div className="aboutus-card">
                            <h2>Our Vision</h2>
                            <p>
                                We as an organization are experts in Providing
                                our Services in the Field of Tourism and
                                Hospitality. We are working very closely with
                                Indian Chambers representing the Indian Industry
                                in various fields to promote India as the
                                destination for Services exports. So, in this
                                endeavor we organize / co organize / provide our
                                services in Exhibitions, Trade Fairs,
                                Conventions, Conferences etc.
                            </p>
                        </div>
                        <div className="aboutus-card">
                            <h2>Our 360-Degree Approach</h2>
                            <p>
                                Sanskaar Group is a national event management
                                company with a strong focus on excellence. Our
                                360-degree approach ensures that every aspect of
                                your event is meticulously planned, seamlessly
                                executed, and flawlessly coordinated. We pride
                                ourselves on our attention to detail, creative
                                approach, and exceptional customer service,
                                making us the preferred choice for clients
                                seeking a seamless and unforgettable event
                                management experience.
                            </p>
                        </div>
                        <div className="aboutus-card">
                            <h2>Our Goals</h2>
                            <p>
                                The sole objective of Sanskaar is to become an
                                extended arm of the Host, that believes in
                                providing very warm hospitality. Our scope
                                starts with the pre-event planning through to
                                execution right up to the post-event winding up.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
