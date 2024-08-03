import "../components/Tagline.css"
import BackgroundVideo from '../image/video.mp4';
const Tagline = () => {
  return (
    <div className="tagline-container">
      <video autoPlay loop muted className="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="enjoy">
        <h1>“WE TAKE CARE OF PREPARATION, YOU ENJOY THE CELEBRATION”</h1>
        <p>Call Us at +91-98101 69720 and check out our great features, we hope you enjoy it.</p>
      </div>
    </div>
  )
}

export default Tagline