import BackgroundImage from "../../image/s7.jpg";
import img from "../../image/contact.jpg";
import img9 from "../../image/contactimg.jpg";
import "./Contact.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";

const Contact = () => {
	return (
		<div className="Form">
			<div className="head" style={{backgroundImage: `url(${img9})`,marginTop:"0.2em",marginBottom:"1em"}}>
			</div>
			{/* <div className="image">
				<img src={img9} alt="" style={{"height": "30%", width: "70%" }} />
			</div> */}
			<p className="para" style={{}}>
				Have a question or want to book an event? Reach out to us, and we'll get back to you promptly.
				We're excited to hear from you!
        
			</p>
			<EnquiryForm />
			
		</div>
	);
};

export default Contact;
