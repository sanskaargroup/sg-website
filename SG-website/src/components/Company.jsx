import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Company.css'; 
import logo1 from "../image/logo/ficci.png";
import logo2 from "../image/logo/logo2.png";
import logo3 from "../image/logo/logo3.png";
import logo4 from "../image/logo/logo4.png";
import logo5 from "../image/logo/logo5.png";
import logo6 from "../image/logo/logo6.png";
import logo7 from "../image/logo/logo7.png";
import logo8 from "../image/logo/logo8.png";
import logo9 from "../image/logo/logo9.png";

const LogoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    
  };

  const logos = [
    { src: logo1, alt: 'FICCI' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
    { src: logo6, alt: 'Logo 6' },
    { src: logo7, alt: 'Logo 7' },
    { src: logo8, alt: 'Logo 8' },
    { src: logo9, alt: 'Logo 9' },
  ];

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
