import "./ContactForm.css";
import BackgroundImage from '../image/T4.jpg'; 

const ContactForm = () => {
  return (
    <div className="contact-form-container" style={{ backgroundImage: `url(${BackgroundImage})`}}>
      <div className="contact-form">
        <h2>
          If you have any questions, please feel free to drop me a line. We will
          get back to you as soon as we can. Thats a promise!
        </h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email (required)"
            required
            className="form-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (required)"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Message (required)"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="send-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
