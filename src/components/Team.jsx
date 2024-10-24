import React, { useState } from 'react';
import { FaChevronDown, FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { LuInstagram } from 'react-icons/lu';
import BackgroundImage from '../image/T5.jpg';
import BackgroundImage1 from '../image/animate.gif';
import Gauransh from '../image/logo/Gauransh.jpeg';
import sanya from '../image/logo/sanya.jpeg';
import team1 from '../image/logo/team1.png';
import './Team.css';

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

const ProfilePopup = ({ member, onClose }) => {
    return (
        <div className="profile-popup-overlay">
            <div className="profile-popup">
                <img src={member.image} alt={member.name} />
                <h2>{member.name}</h2>
                <p>{member.description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleViewProfile = (member) => {
        if (member.name === 'Vikram Chopra') {
            setSelectedMember({
                ...member,
                description:
                    'With over 27 years of industry experience, Vikram Chopra is a seasoned expert in event management, renowned for his commitment to innovation and excellence. His leadership in both domestic and international delegations has earned widespread recognition for his outstanding management and operational skills. Under his guidance, our team is driven to consistently deliver top-tier event solutions that exceed client expectations.',
            });
        } else {
            window.open(member.social.profile, '_blank');
        }
    };

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
                            onClick={() => handleViewProfile(member)}
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
            {selectedMember && (
                <ProfilePopup
                    member={selectedMember}
                    onClose={() => setSelectedMember(null)}
                />
            )}
        </div>
    );
};

export default Team;
