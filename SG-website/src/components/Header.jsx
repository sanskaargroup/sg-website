// import { useState } from 'react';
// import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
// import './Header.css';
// import head1 from '../image/h1.jpg';
// import head2 from '../image/h2.jpg';
// import head3 from '../image/h3.jpg';
// import head4 from '../image/h4.jpg';

// const slides = [
//   {
//     image: head1,
//     title: 'WE ARE SANSKAAR GROUP',
//     subtitle: 'DOING THINGS DIFFERENTLY',
//     description: 'We make your events smart & impactful with personalized event management services.',
//     animationClass: 'slideInFromLeft'
//   },
//   {
//     image: head4,
//     title: 'WE MAKW YOUE EVENT MEMORABLE',
//     subtitle: '',
//     description: 'And Awesome',
//     animationClass: 'slideInFromRight'
//   },
//   {
//     image: head3,
//     title: 'EXPERIENCE',
//     subtitle: 'THE DIFFERENCE',
//     description: 'We make your events smart & impactful with personalized event management services. Professional and personalized event solutions.',
//     animationClass: 'fadeIn'
//   }
// ];

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);

//   const handlePrevClick = () => {
//     setPrevIndex(currentIndex);
//     setCurrentIndex(currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1);
//   };
  
//   const handleNextClick = () => {
//     setPrevIndex(currentIndex);
//     setCurrentIndex(currentIndex + 1 >= slides.length ? 0 : currentIndex + 1);
//   };

//   const { image, title, subtitle, description, animationClass } = slides[currentIndex];

//   return (
//     <div className="header">
//       {slides.map((slide, index) => (
//         <img
//           key={index}
//           src={slide.image}
//           alt="Header Background"
//           className={currentIndex === index ? 'active' : ''}
//         />
//       ))}
//       <LuChevronLeft className="chevron-left" onClick={handlePrevClick} />
//       <LuChevronRight className="chevron-right" onClick={handleNextClick} />
//       <div className={`header-content ${animationClass}`}>
//         {/* <h3>WE ARE SANSKAAR GROUP</h3> */}
//         <h1 className='title'>{title}</h1>
//         <h1>{subtitle}</h1>
//         <h4>{description}</h4>
//       </div>
//     </div>
//   );
// };  

// export default Header;

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackgroundImage1 from "../image/z8.jpg"
import BackgroundImage2 from "../image/z6.jpg"
import BackgroundImage3 from "../image/z4.jpg"
import BackgroundImage4 from "../image/header1.jpg"
import BackgroundImage5 from "../image/animate.gif"
import TrackVisibility from 'react-on-screen';
import './Header.css';

export const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Welcome to Sanskaar Group", "“We handle...    You celebrate..." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home" style={{ backgroundImage: `url(${BackgroundImage5})`, objectFit: 'cover'}}>
      <Container className="container">
        <Row className="align-items-center">
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{` `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Welcome to Sanskaar Group", "“We handle...     You celebrate...”" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Established in 2013, Sanskaar is renowned for its personalized event management services, catering to corporate and social events. With fully-equipped in-house production facilities and offices in Noida and Gurugram, our global presence in the Middle East and CIS countries enables us to deliver exceptional, tailor-made event solutions, ensuring every event is a success.</p>
                  <button  className="learn-more"><span className="circle" aria-hidden="true"><span className="icon arrow"></span></span><span className="button-text">Know more</span></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col>
            <div className="h-card">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="imagemain">
                    <div className="card" id="c1" style={{ backgroundImage: `url(${BackgroundImage1})`, objectFit: 'cover', backgroundPosition: 'center', backgroundSize: 'cover',}}></div>
                    <div className="card" id="c2" style={{ backgroundImage: `url(${BackgroundImage2})`, objectFit: 'cover', backgroundPosition: 'center', backgroundSize: 'cover',}}></div>
                    <div className="card" id="c3" style={{ backgroundImage: `url(${BackgroundImage3})` , objectFit: 'cover', backgroundPosition: 'center', backgroundSize: 'cover',}}></div>
                    <div className="card" id="c4" style={{ backgroundImage: `url(${BackgroundImage4})`, objectFit: 'cover', backgroundPosition: 'center', backgroundSize: 'cover',  }}></div>
                  </div>
                </div>}
            </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Header;


