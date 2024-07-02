import { useState } from 'react';
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import './Header.css';
import head1 from '../image/h1.jpg';
import head2 from '../image/h2.jpg';
import head3 from '../image/h3.jpg';
import head4 from '../image/h4.jpg';

const slides = [
  {
    image: head1,
    title: 'WE ARE SANSKAAR GROUP',
    subtitle: 'DOING THINGS DIFFERENTLY',
    description: 'We make your events smart & impactful with personalized event management services.',
    animationClass: 'slideInFromLeft'
  },
  {
    image: head4,
    title: 'WE MAKW YOUE EVENT MEMORABLE',
    subtitle: '',
    description: 'And Awesome',
    animationClass: 'slideInFromRight'
  },
  {
    image: head3,
    title: 'EXPERIENCE',
    subtitle: 'THE DIFFERENCE',
    description: 'Professional and personalized event solutions.',
    animationClass: 'fadeIn'
  }
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handlePrevClick = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex(currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1);
  };
  
  const handleNextClick = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex(currentIndex + 1 >= slides.length ? 0 : currentIndex + 1);
  };

  const { image, title, subtitle, description, animationClass } = slides[currentIndex];

  return (
    <div className="header">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt="Header Background"
          className={currentIndex === index ? 'active' : ''}
        />
      ))}
      <LuChevronLeft className="chevron-left" onClick={handlePrevClick} />
      <LuChevronRight className="chevron-right" onClick={handleNextClick} />
      <div className={`header-content ${animationClass}`}>
        {/* <h3>WE ARE SANSKAAR GROUP</h3> */}
        <h1 className='title'>{title}</h1>
        <h1>{subtitle}</h1>
        <h4>{description}</h4>
      </div>
    </div>
  );
};  

export default Header;
