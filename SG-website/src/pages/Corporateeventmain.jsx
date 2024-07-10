import BackgroundImage from "../image/s7.jpg"; 
import "./Corporateeventmain.css"
const Corporateeventmain = () => {
  return (
    <div>
      <div className="corporate-event">
        <div className="head" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <h1>Social Event</h1>
        </div>
        <div className="line"></div>
        <h2>International Events to our Credit pertaining to Co Organizing the Event:</h2>
        {/* <ul>
        
       
    </ul> */}
    <div className="year1">
          <h3>2017-2018</h3>
          <ul>
          <li>
            <span className="event-name">India – Kyrgyz Health Co – Operation Programme 2017</span>
            <span>Bishkek, Kyrgyzstan</span>
        </li>
        <li>
            <span className="event-name">Medex 2017</span>
            <span>Yangon, Myanmar</span>
        </li>
        <li>
            <span className="event-name">Namaskar Africa 2017</span>
            <span>Ghana</span>
        </li>
        <li>
            <span className="event-name">Oman Health Exhibition and Conference 2018</span>
            <span>Muscat, Oman</span>
        </li>
        <li>
            <span className="event-name">Mtech Kiev 2018</span>
            <span>Kiev, Ukraine</span>
        </li>
        <li>
            <span className="event-name">Hestourex 2018</span>
            <span>Antalya, Turkey</span>
        </li>
          </ul>
    </div>
    <div>
      <h3>2018-2019</h3>
      <ul>
      <li>
            <span className="event-name">Hestourex 2019</span>
            <span>Antalya, Turkey</span>
        </li>
        <li>
            <span className="event-name">International Conference on Medical Tourism 2018</span>
            <span>Tehran, Iran</span>
        </li>
        <li>
            <span className="event-name">Namaskar Africa 2019</span>
            <span>Kenya and Tanzania</span>
        </li>
        <li>
            <span className="event-name">ExpoMed 2019</span>
            <span>Batumi, Georgia</span>
        </li>
        <li>
            <span className="event-name">Oman Health Exhibition and Conference 2019</span>
            <span>Muscat, Oman</span>
        </li>
        <li>
            <span className="event-name">Mtech 2019</span>
            <span>Kiev, Ukraine</span>
        </li>
        <li>
            <span className="event-name">2nd Medical Tourism Asia Summit 2019</span>
            <span>Kathmandu, Nepal</span>
        </li>
      </ul>
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
  )
}

export default Corporateeventmain