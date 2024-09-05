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
import sc10 from "../../image/sc10.jpg";
import sc11 from "../../image/sc11.jpg";
import sc12 from "../../image/sc12.jpg";
import sc13 from "../../image/sc13.jpg";
import sc14 from "../../image/sc14.jpg";
import sc15 from "../../image/sc15.jpg";
import sc16 from "../../image/sc16.jpg";
import sc17 from "../../image/sc17.jpg";
import sc18 from "../../image/sc18.jpg";

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
  {
    id: 10,
    image: sc10,
  },
  {
    id: 11,
    image: sc11,
  },
  {
    id: 12,
    image: sc12,
  },
  {
    id: 13,
    image: sc13,
  },
  {
    id: 14,
    image: sc14,
  },
  {
    id: 15,
    image: sc15,
  },
  {
    id: 16,
    image: sc16,
  },
  {
    id: 17,
    image: sc17,
  },
  {
    id: 18,
    image: sc18,
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
      {/* <div className='scbtn'>
        <button>
            See more
        </button>
      </div> */}
    </div>
  );
};

export default SocialEvents;
