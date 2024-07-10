import { useEffect, useRef } from 'react';
import { FaConciergeBell, FaHotel, FaBuilding, FaUtensils } from 'react-icons/fa';
import './Services.css';
import H5 from "../image/h5.gif";

const Services = () => {
  const servicesRef = useRef([]);

  useEffect(() => {
    servicesRef.current.forEach((el, index) => {
      el.style.animation = `fadeInUp 0.8s ${index * 0.2}s forwards`;
    });
  }, []);

  return (
    <section className="services">
      <div className="services-header">
        <h2>Welcome to Sanskaar Group</h2>
      </div>
      <div className="services-container">
        <div className="services-grid">
          {[
            { icon: <FaConciergeBell />, text: 'Event Management' },
            { icon: <FaHotel />, text: 'Hospitality' },
            { icon: <FaBuilding />, text: 'Food & Beverage' },
            { icon: <FaUtensils />, text: 'Catering Services' },
          ].map((service, index) => (
            <div
              className="service-item"
              key={index}
              ref={(el) => (servicesRef.current[index] = el)}
            >
              <div className="icon">{service.icon}</div>
              <div className="text">{service.text}</div>
            </div>
          ))}
        </div>
        <div className="services-image">
          <img src={H5} alt="Kumbh" />
        </div>
      </div>
    </section>
  );
};

export default Services;
