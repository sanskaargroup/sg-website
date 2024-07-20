import { FaChevronDown } from "react-icons/fa";
import { TfiLineDotted } from "react-icons/tfi";
import "./About.css"
import P1 from "../image/P1.jpg"
import P2 from "../image/P2.jpg"
import P3 from "../image/P3.jpg"
import P4 from "../image/P4.jpg"
import P5 from "../image/P5.jpg"
const About = () => {
  return (
    <div>
        <div className="intro" >
            <div className="text">
                <h2>ABOUT SANSKAAR GROUP</h2>
                <br />
                <h4>CHECK OUT OUR EXPERTIES</h4>
            </div>
            <div className="icon">
                <FaChevronDown />
            </div>
        </div>
        <div className="info">
            <h3 className="info-text">Doing things differently is the philosophy we believe in which helps us in creating hand-crafted experiences..</h3>
            <div className="main">
                <div className="div1">
                    <div className="content1">
                        <img src={P1} alt="" />
                        <h3>SOCIAL EVENTS</h3>
                        <TfiLineDotted  className="dotted"/>
                        <p>Sanskaar brings to fore its expertise and finess in creating concept based social events which not only make the event immemorable with the very fact of it being an important date for our…</p>
                    </div>
                    <div className="content2">
                        <img src={P2} alt="" />
                        <h3>CORPORATE EVENTS</h3>
                        <TfiLineDotted  className="dotted"/>
                        <p>Corporate events play a horizontal bridging role, giving people a different context in which to relate. They are rich avenues for building new and unexpected yet sustained relationships.</p>
                    </div>
                </div>
                <div className="div2">
                    <img src = {P3} alt="" />
                </div>
                <div className="div3">
                <div className="content4">
                        <img src={P4} alt="" />
                        <h3>WEDDING EVENTS</h3>
                        <TfiLineDotted />
                        <p>Sanskaar has a fully capable and self-sufficient, dedicated team for imagining & creating a dream wedding. We offer customized holistic solutions creating unparallel experiences.</p>
                    </div>
                    <div className="content4">
                        <img src={P5}alt="" />
                        <h3>TOURISM EVENTS</h3>
                        <TfiLineDotted />
                        <p>We infuse the ‘LARGER than LIFE’ aspect in Tourism events and initiatives. We Ideate concepts and create content which has NEVER BEEN DONE & SEEN BEFORE.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About