import BlogTemplate from './blogtemplate';
import './blogtemplate.css';
import './Blogmain.css';
import BackgroundImage from "../image/s7.jpg"

const Blogmain = () => {
  return (
    <div>
      <div className="head" style={{ backgroundImage: `url(${BackgroundImage})`}}>
        <h1>Blogs</h1>
      </div>
      <div className="line"></div>
      <div className='blog-temp'>
        <BlogTemplate />
      </div>
    </div>
  );
};

export default Blogmain;
