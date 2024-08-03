
import BackgroundImage from '../../image/s7.jpg'
import img from '../../image/contact.jpg';
import img2 from "../../image/contactusimg.jpg"
import './Contact.css'
import EnquiryForm from "../enquiry-form/EnquiryForm"

const  Contact = () => {
  return (
    <div className="Form">
      <div className="head" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Services</h1>
      </div>
      <div className="image">
        <img src={img2} alt="" style={{"height": "250px", width: "250px" }} />
      </div>
      <p className="para">Get in touch and We&apos;ll get back to you as soon as we can. We look forward to hearing from you!</p>
      <EnquiryForm />
    </div>
  );
};

export default Contact;
