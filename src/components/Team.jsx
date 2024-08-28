import { FaChevronDown } from "react-icons/fa";
import BackgroundImage from '../image/T5.jpg'; 
import BackgroundImage1 from '../image/animate.gif'; 
import team1 from '../image/logo/team1.png'; 
import "./Team.css"
import D1 from "../image/D1.jpg"
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const teamMembers = [
  {
    name: 'Shivam Rai',
    title: 'HEAD BUSINESS DEVELOPMENT',
    image: 'data:image/jpeg;base64,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',
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
      profile: ''
    }
  },
  {
    name: 'Vikram Chopra',
    title: 'HOSPITALITY CONSULTANT',
    image: team1,
    social: {
      facebook: 'https://www.facebook.com/share/dVgZc6gTNZHCTAL2/?mibextid=LQQJ4d',
      linkedin: 'https://www.linkedin.com/in/vikram-chopra-56843373/',
      instagram: 'https://www.instagram.com/vikramchopra23/?utm_source=qr',
      profile: 'https://www.linkedin.com/in/vikram-chopra-56843373/'
    }
  },
  {
    name: 'Sanya Chopra',
    title: 'HEAD ADMINISTRATION',
    image: D1,
    social: {
      facebook: '#',
      linkedin: '#',
      instagram: '#',
      profile: ''
    }
  }
];

const Team = () => {
  return (
    <div className="mem" >
        <div className="intro" style={{ backgroundImage: `url(${BackgroundImage})`}}>
            <div className="text">
                <h2>OUR CREATIVES</h2>
                <br />
                <h4>KNOW OUR TEAM MEMBERS</h4>
            </div>
            <div className="icon">
                <FaChevronDown />
            </div>  
        </div>
    <div className="team-container" style={{ backgroundImage: `url(${BackgroundImage1})`}} >
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.title}</p>
          
          <div className="social-icons">
            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"><LuInstagram /></a>
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
          <button className="profile" onClick={() => window.open(member.social.profile, "_blank")}>
              View Profile
            </button>
        </div>
      ))}
    </div>
    </div>
    

  )
}

export default Team