
import BackgroundImage from '../../image/s7.jpg'
import img from '../../image/contact.jpg';
import img2 from "../../image/contactusimg.jpg"
import CareersForm from './careersForm';

const Careers = () => {
  return (
    <div className="Form">
      <div className="head" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Services</h1>
      </div>
      <div className="image">
        <img src={img2} alt="" style={{"height": "250px", width: "250px" }} />
      </div>
      <p className="para">Join our Team!</p>
      <CareersForm />
    </div>
  );
};

export default Careers;

