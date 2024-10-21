// src/components/Portfolio.jsx
import { useEffect } from 'react';
import './Portfolio.css';

// Import your images here
import Image1 from '../image/s1.jpg';
import Image2 from '../image/s2.jpg';
import Image3 from '../image/s3.jpg';
import Image4 from '../image/s4.jpg';
import Image5 from '../image/s5.jpg';
import Image6 from '../image/s6.jpg';
import Image7 from '../image/s7.jpg';
import Image8 from '../image/s8.jpg';
import Image9 from '../image/s9.jpg';
import Image10 from '../image/s10.jpg';

const Portfolio = () => {
    useEffect(() => {
        // Duplicate the logos-slide for continuous scrolling effect
        const copy = document.querySelector('.logos-slide').cloneNode(true);
        document.querySelector('.logos').appendChild(copy);
    }, []);

    return (
        <div className="logos">
            <div className="logos-slide">
                <img src={Image1} alt="Logo 1" />
                <img src={Image2} alt="Logo 2" />
                <img src={Image3} alt="Logo 3" />
                <img src={Image4} alt="Logo 4" />
                <img src={Image5} alt="Logo 5" />
                <img src={Image6} alt="Logo 6" />
                <img src={Image7} alt="Logo 7" />
                <img src={Image8} alt="Logo 8" />
                <img src={Image9} alt="Logo 8" />
                <img src={Image10} alt="Logo 8" />
                <img src={Image1} alt="Logo 1" />
                <img src={Image2} alt="Logo 2" />
                <img src={Image3} alt="Logo 3" />
                <img src={Image4} alt="Logo 4" />
                <img src={Image5} alt="Logo 5" />
                <img src={Image6} alt="Logo 6" />
                <img src={Image7} alt="Logo 7" />
                <img src={Image8} alt="Logo 8" />
                <img src={Image9} alt="Logo 8" />
                <img src={Image10} alt="Logo 8" />
            </div>
        </div>
    );
};

export default Portfolio;
