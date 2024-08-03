import BlogTemplate from "./Blogtemplate"
import './blogtemplate.css';
import './Blog.css';
import BackgroundImage from "../../image/s7.jpg"

const Blog = () => {
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

export default Blog;
