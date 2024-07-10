// src/components/BlogTemplate.jsx
import  { useState } from 'react';
import blogData from './blogdata';
import "./blogtemplate.css"

const BlogTemplate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsPerPage = 8;
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedBlog(null);
  };

  const renderBlogCards = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = blogData.slice(startIndex, startIndex + blogsPerPage);

    return currentBlogs.map((blog) => (
      <div key={blog.id} className="blog-card" onClick={() => handleBlogClick(blog)}>
        <img src={blog.img} alt={blog.title} />
        <div className='blogtext'>
          <h2>{blog.title}</h2>
          <h3>{blog.subtitle}</h3>
        </div>
      </div>
    ));
  };

  const renderPagination = () => (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="blog-container">
      {selectedBlog ? (
        <div className="blog-detail">
          <button onClick={() => setSelectedBlog(null)}>Back</button>
          <img src={selectedBlog.img} alt={selectedBlog.title} />
          <h1>{selectedBlog.title}</h1>
          <h3>{selectedBlog.subtitle}</h3>
          <p>{selectedBlog.content}</p>
        </div>
      ) : (
        <>
          <div className="blog-cards">{renderBlogCards()}</div>
          {renderPagination()}
        </>
      )}
    </div>
  );
};

export default BlogTemplate;
