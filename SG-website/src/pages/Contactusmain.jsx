
import BackgroundImage from "../image/s7.jpg";
import img from '../image/contact.jpg';
import './Contactusmain.css';
import EnquiryForm from './EnquiryForm';

const Contactusmain = () => {
  return (
    <div className="Form">
      <div className="head" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Services</h1>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <p className="para">Get in touch and We'll get back to you as soon as we can. We look forward to hearing from you!</p>
      <EnquiryForm />
    </div>
  );
};

export default Contactusmain;
