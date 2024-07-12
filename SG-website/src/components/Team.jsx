import { FaChevronDown } from "react-icons/fa";
import BackgroundImage from '../image/T5.jpg'; 
import BackgroundImage1 from '../image/K1.jpg'; 
import "./Team.css"
import D1 from "../image/D1.jpg"
const teamMembers = [
    {
      name: 'Vikram Chopra',
      title: 'HOSPITALITY CONSULTANT',
      image: D1,
      social: {
        facebook: '#',
        linkedin: '#',
        skype: '#',
        twitter: '#'
      }
    },
    // {
    //   name: 'Dalip Kumar Chopra',
    //   title: 'HOSPITALITY CONSULTANT',
    //   image: 'path/to/dalip.jpg',
    //   social: {
    //     facebook: '#',
    //     linkedin: '#',
    //     skype: '#',
    //     twitter: '#'
    //   }
    // },
    {
      name: 'Shivam Rai',
      title: 'HEAD BUSINESS DEVELOPMENT',
      image: D1,
      social: {
        facebook: '#',
        linkedin: '#',
        skype: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sanya Chopra',
      title: 'HEAD ADMINISTRATION',
      image: D1,
      social: {
        facebook: '#',
        linkedin: '#',
        skype: '#',
        twitter: '#'
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
    <div className="team-container" >
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.title}</p>
          
          <div className="social-icons">
            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">F</a>
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">L</a>
            <a href={member.social.skype} target="_blank" rel="noopener noreferrer">S</a>
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">T</a>
          </div>
          <button className="profile">View Profile</button>
        </div>
      ))}
    </div>
    </div>
    

  )
}

export default Team