import BackgroundImage from "../image/s7.jpg"; 
import "./Socialeventmain.css";

const Socialeventmain = () => {
  return (
    <div>
      <div className="Social-Event">
        <div className="head" style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <h1>Social Event</h1>
        </div>
        <div className="line"></div>
        <div>
          <h2>Domestic Events to our Credit pertaining to Hospitality, Manpower, and Concierge Services</h2>
          <div className="year-wise">
            <div className="year1,card">
              <h2>2016-2017</h2>
              <ul>
                <li>INDIA PHARMA 2016</li>
                <li>INDIA HOSPITAL SUMMIT 2016</li>
                <li>ADVANTAGE HEALTHCARE INDIA 2016</li>
                <li>INDIA HOSPITAL SUMMIT 2017</li>
                <li>INDIA PHARMA 2017</li>
                <li>INDIA MEDICAL DEVICE EXPO 2017</li>
                <li>AAJEEVIKA 2017</li>
                <li>GES 2017</li>
                <li>INDIA – AFRICA HEALTH CO- OPERATION PROGRAM 2017</li>
                <li>INDIA INTEGRATED LOGISTICS & TRANSPORT SUMMIT 2017</li>
                <li>ADVANTAGE HEALTHCARE INDIA 2017</li>
                <li>BIRTH CENTENARY CELEBRATIONS OF NANAJI DESHMUKH 2017</li>
                <li>HES 2017</li>
                <li>INTERNATIONAL AROGYA 2017</li>
                <li>EIMA AGRIMACH 2017</li>
              </ul>
            </div>
            <div className="year2">
              <h2>2018-2019</h2>
              <ul>
                <li>SKILL SUMMIT 2018</li>
                <li>INDIA PHARMA 2018</li>
                <li>INDIA MEDICAL DEVICE EXPO 2018</li>
                <li>KRISHI UNNATI 2018</li>
                <li>ADVANTAGE HEALTHCARE INDIA 2018</li>
                <li>WED 2018</li>
                <li>IPHEX 2018</li>
                <li>AILBS 2019</li>
                <li>COP 14</li>
                <li>Advantage Healthcare India 2019</li>
                <li>International Arogya 2019</li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="gallery">
            <h3>Glimpse of events</h3>
            <div className="event-images">
                <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
                <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
                <img src="" alt="" /><img src="" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Socialeventmain;
