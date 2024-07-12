import { useEffect, useRef } from 'react';
import { FaConciergeBell, FaHotel, FaBuilding, FaUtensils } from 'react-icons/fa';
import './Services.css';
import H5 from "../image/h5.gif";


import BackgroundImage from "../image/Services.gif";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";



const Services = () => {
  const servicesRef = useRef([]);

  useEffect(() => {
    servicesRef.current.forEach((el, index) => {
      el.style.animation = `fadeInUp 0.8s ${index * 0.2}s forwards`;
    });
  }, []);

  return (
    // <section className="services">
    //   <div className="services-header">
    //     <h2>Welcome to Sanskaar Group</h2>
    //   </div>
    //   <div className="services-container">
    //     <div className="services-grid">
    //       {[
    //         { icon: <FaConciergeBell />, text: 'Event Management' },
    //         { icon: <FaHotel />, text: 'Hospitality' },
    //         { icon: <FaBuilding />, text: 'Food & Beverage' },
    //         { icon: <FaUtensils />, text: 'Catering Services' },
    //       ].map((service, index) => (
    //         <div
    //           className="service-item"
    //           key={index}
    //           ref={(el) => (servicesRef.current[index] = el)}
    //         >
    //           <div className="icon">{service.icon}</div>
    //           <div className="text">{service.text}</div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="services-image">
    //       <img src={H5} alt="Kumbh" />
    //     </div>
    //   </div>
    // </section>
    <div className='services' style={{ backgroundImage: `url(${BackgroundImage})`}} >
      <div className='services-heading'>
        <h3>Available services</h3>
      </div>
      <div className='allcards'>
      <div className='services-card'>
        <div className="card1">
          <div className="align">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <h1><MdOutlineEventAvailable /></h1>
          <h2>Event Management</h2>
          </div>
      </div>
      <div className='services-card'>
        <div className="card2">
          <div className="align">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <h1><MdFoodBank /></h1>
          <h2>Hospitality and F&B</h2>
          </div>
      </div>
      <div className='services-card'>
        <div className="card3">
          <div className="align">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <h1><MdEmojiFoodBeverage /></h1>
          <h2>Catering Services</h2>
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default Services;

