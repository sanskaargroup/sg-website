import './Socialevent.css';
import sc from '../../image/sc.mp4';
import BackgroundImage from "../../image/s7.jpg";
import sc1 from "../../image/sc1.jpg";
import sc2 from "../../image/sc2.jpg";
import sc3 from "../../image/sc3.jpg";
import sc4 from "../../image/sc4.jpg";
import sc5 from "../../image/P4.jpg";
import sc6 from "../../image/sc5.jpeg";
import sc7 from "../../image/sc7.jpeg";
import sc8 from "../../image/sc8.jpg";
import sc9 from "../../image/sc9.jpg";

const events = [
  {
    id: 1,
    image: sc1,
  },
  {
    id: 2,
    image: sc2,
  },
  {
    id: 3,
    image: sc3,
  },
  {
    id: 4,
    image: sc4,
  },
  {
    id: 5,
    image: sc5,
  },
  {
    id: 6,
    image: sc6,
  },
  {
    id: 7,
    image: sc7,
  },
  {
    id: 8,
    image: sc8,
  },
  {
    id: 9,
    image: sc9,
  },
  // Add more events as needed
];

const SocialEvents = () => {
  return (
    <div className="social-events">
      <div className="head" style={{backgroundImage: `url(${BackgroundImage})`}}>
					<h1>Social Event</h1>
			</div>
      <div className='sangam'>
        <h1>Sangam</h1>
      </div>
      <div className="video-container">
        <video src={sc} controls className="video" />
      </div>
      <div className='sangam'>
        <h1>Wedding </h1>
      </div>
      <div className="scgallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img
              src={event.image}
              className="scevent"
            />
          </div>
        ))}
        
      </div>
      <div className='scbtn'>
        <button>
            See more
        </button>
      </div>
    </div>
  );
};

export default SocialEvents;
