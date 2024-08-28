import React from 'react';
import "./Gallery.css";
import sc1 from "../../image/sc1.jpg";
import sc2 from "../../image/sc2.jpg";
import sc3 from "../../image/sc3.jpg";
const events = [
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },

  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  {
    id: 1,
    title: "Wedding Ceremony",
    photos: [
      sc1,
      sc2,
      sc3
    ]
  },
  // jitna chahe utna add kr liyo 
  // aur thoda jldi kr liyo
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {events.map((event) => (
        <div key={event.id} className="gevent-card">
          <h2 className="event-title">{event.title}</h2>
          <div className="event-photos">
            {event.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Event ${event.id} - Photo ${index + 1}`} className="event-photo" />
            ))}
          </div>
          <button>See More</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
