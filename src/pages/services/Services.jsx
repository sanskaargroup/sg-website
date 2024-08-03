import "./Services.css"
import BackgroundImage from "../../image/s7.jpg"
import eventImage1 from "../../image/ser1.jpg"
import eventImage2 from "../../image/ser2.jpg"
import eventImage3 from "../../image/ser3.jpg"
import eventImage4 from "../../image/ser4.jpeg"
const Services = () => {
  return (
    <div>
      <div className="head" style={{ backgroundImage: `url(${BackgroundImage})`}}>
        <h1>Services</h1>
      </div>
      <div className="line"></div>
      <div className="text-service">
        <h1>Our Team Believes “ WOW AT EVERY MOMENT OF TRUTH”</h1>
        <div className="line"></div>
          <p>Sanskaar has a fully capable and self-sufficient, dedicated team for creating dream weddings. We offer customized holistic solutions creating unparallel experiences. Our weddings reflect our client’s lifestyle and personalities creating unforgettable moments and lifelong memories.
          </p>
          <p>Our Team assist with all the planning,  negotiating, and handling of various aspects of event planning ensuring best services at the most competitive price. The end-to-end solutions come to you in a platter  with our guarantee, backed by our strong net working and long-established vendor relations in the industry.   
            The sole objective of Sanskaar is to become an extended arm of the Host, that believes in providing  very warm hospitality.              
            </p>
            <p>Our scope starts with the pre-event planning through to execution right up to the post-event winding up. 
            We also source / produce / execute and / or coordinate / manage the best experts in various fields of floral, set design, décor, interiors, lighting, audio/video, DJ , Celebrity shows etc. put them all together on a platform to create a fantastic and excellent experience for the  guests.</p>
      </div>
      <div className="events">
        <div className="private-events">
          <div className="image-section">
            <img src={eventImage1} id="hov" alt="Private/Social Event" />
          </div>
          <div className="content-section">
          <h1>PRIVATE / SOCIAL EVENTS</h1>
          <h2>“Turning ideas into action”</h2>
          <p>
            Sanskaar brings to fore its expertise and finesse in creating concept-based social events which not only make the event 
            inmemorable with the very fact of it being an important date for our client, but also an experience that one will not 
            forget easily. The event maybe a milestone birthday, Wedding, an anniversary or just a special celebration. 
            <strong>we personalize your wedding events</strong>
          </p>
          <p>
            We create stories from these events. Our services entail detailed and well-defined attention to conceptualisation, 
            designing and production. Minute attention to details like hospitality of our esteemed guests and their 360 degree 
            experience at the event, which pans captivating entertainment and remarkable epicurean encounter, makes our services 
            all-encompassing.
          </p>
          <p>
            Our entertainment design reflects the years of experience and in-depth insight into the demands of the client to the 
            current trends and the understanding of the market – helping us to tightrope walk perfectly the right decision, of 
            what the client may want... and what the audience will enjoy!
          </p>
        </div>
        
    </div>
      </div>
      <div className="events">
        <div className="private-events">
          <div className="content-section">
          <h1>CORPORATE EVENTS</h1>
          <h2>“An exceptional experience everytime”</h2>
          <p>
          Today, corporate events are becoming more important than ever. Businesses are now increasingly ‘relationship driven’, dominated by alliances, mergers and teams. While in other social contexts, growth of ‘social media’ means that people come in contact with a wider variety of people outside work as well.
          </p>
          <p>
          Corporate events play a horizontal bridging role – giving people a different context in which to relate. They are rich avenues for building new and unexpected yet sustained relationships.
          As a result, the more electronically connected the world becomes, the more important corporate events become.
          </p>
          <p>
          Having been at the helm in this space, we can firmly say that, once you call us, we assure very unique ideas for great corporate events.
          </p>
        </div>
        <div className="image-section">
            <img src={eventImage2} id="hov" alt="Private/Social Event" />
          </div>
    </div>
      </div>
      <div className="events">
        <div className="private-events">
          <div className="image-section">
            <img src={eventImage3} id="hov" alt="Private/Social Event" />
          </div>
          <div className="content-section">
          <h1>SOCIAL AND CORPORATE EVENTS AT DIFFERENT DESTINATIONS</h1>
          <h2>”We take your fun seriously”</h2>
          <p>
          We plan , organise and execute Destination marriages or corporate events  at different domestic places like GOA, Jaipur and  Jodhpur etc and International destinations like Kazakhstan, Kyrgyzstan, Tajikistan , Turkey and  Italy.
          </p>
        </div>
        
    </div>
      </div>
      <div className="events">
        <div className="private-events">
          <div className="content-section">
          <h1>MANAGEMENT CONSULTANCY</h1>
          <h2>”Excellence is not an act but a habit”</h2>
          <p>
          We make your events smart & impactful by personalised event management services.
          Our company provides Management consultancy to all events be it social or corporate. We have a team of THE EVENT MANAGEMENT SPECIALISTS WHO WILL LOOK AFTER YOUR NEEDS AND WILL ENSURE TO FULFILL IT.
          </p>
        </div>
        <div className="image-section">
            <img src={eventImage4} id="hov" alt="Private/Social Event" />
          </div>
    </div>
      </div>
      
    </div>
  )
}

export default Services