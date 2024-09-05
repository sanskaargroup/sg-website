
import BackgroundImage from '../../image/s7.jpg'
import img from '../../image/contact.jpg';
import img2 from "../../image/contactusimg.jpg"
import CareersForm from './careersForm';

const Careers = () => {
  return (
    <div className="Form">

      <div className="head" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Careers</h1>
      </div>
      <div className="image">
        <img src={img2} alt="" style={{"height": "30%", width: "70%" }} />
      </div>
      <CareersForm />
      
      <div className='contractual' style={{width: "98%" , height:"3rem" ,fontSize:"7px" ,backgroundColor:"white",display:"flex",
        justifyContent:"center",alignItems:"center",margin:"3em"}}>
        <p  style={{fontSize:"2.5em" }}>
        Ready to collaborate with us on a contract basis....?
          <a style={{ color:"green", textDecoration:"none" }} href="https://docs.google.com/forms/d/e/1FAIpQLSfGl8sVX4f7C-hZnglDJOVp8htpZwmKPh8OyQmFJ5STRH4l0w/viewform?usp=sf_link">Join now</a>
        </p>
      </div>

    </div>
  );
};

export default Careers;

