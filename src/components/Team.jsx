import { FaChevronDown } from 'react-icons/fa';
import BackgroundImage from '../image/T5.jpg';
import BackgroundImage1 from '../image/animate.gif';
import team1 from '../image/logo/team1.png';
import './Team.css';
import D1 from '../image/D1.jpg';
import sanya from '../image/logo/sanya.jpeg';
import Gauransh from '../image/logo/Gauransh.jpeg';
import { LuInstagram } from 'react-icons/lu';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
const teamMembers = [
    {
        name: 'Gauransh Chopra',
        title: 'HEAD BUSINESS DEVELOPMENT',
        image: Gauransh,
        social: {
            facebook: '#',
            linkedin: 'https://www.linkedin.com/in/gauranshchopra/',
            instagram: 'https://www.instagram.com/gauransh.chopra_/',
            profile: 'https://www.linkedin.com/in/gauranshchopra/',
        },
    },
    {
        name: 'Vikram Chopra',
        title: 'HOSPITALITY CONSULTANT',
        image: team1,
        social: {
            facebook:
                'https://www.facebook.com/share/dVgZc6gTNZHCTAL2/?mibextid=LQQJ4d',
            linkedin: 'https://www.linkedin.com/in/vikram-chopra-56843373/',
            instagram:
                'https://www.instagram.com/vikramchopra23/?utm_source=qr',
            profile: 'https://www.linkedin.com/in/vikram-chopra-56843373/',
        },
    },
    {
        name: 'Sanya Chopra',
        title: 'HEAD ADMINISTRATION',
        image: sanya,
        social: {
            facebook: '#',
            linkedin: 'https://www.linkedin.com/in/adv-sanya-chopra-b8132a229/',
            instagram: 'https://www.instagram.com/sa_nya7216/',
            profile: 'https://www.linkedin.com/in/adv-sanya-chopra-b8132a229/',
        },
    },
];

const Team = () => {
    return (
        <div className="mem">
            <div
                className="intro"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div className="text">
                    <h2>OUR CREATIVES</h2>
                    <br />
                    <h4>KNOW OUR TEAM MEMBERS</h4>
                </div>
                <div className="icon">
                    <FaChevronDown />
                </div>
            </div>
            <div
                className="team-container"
                style={{ backgroundImage: `url(${BackgroundImage1})` }}
            >
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>

                        <div className="social-icons">
                            <a
                                href={member.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LuInstagram />
                            </a>
                            <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={member.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                        <button
                            className="profile"
                            onClick={() =>
                                window.open(member.social.profile, '_blank')
                            }
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
