import React from 'react';
import blog1 from '../assets/images/blog1.png';
import blog2 from '../assets/images/main_article_image.png';
import eyeIcon from '../assets/images/eye.png';
import avatar from '../assets/images/Group 237.png';

const RelatedBlogs = () => (
  <section className="related-blogs">
    <div className="section-header">
      <h2 className="h2-blog">Related Blog</h2>
      <span className="see-all" onClick={() => alert('Redirecting to full list...')}>See all</span>
    </div>
    <div className="blog-card-list">
      {[blog1, blog2].map((img, i) => (
        <div className="blog-card" key={i}>
          <img src={img} alt={`Blog ${i + 1}`} />
          <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
          <div className="author">
            <img src={avatar} alt="Lina" className="avatar" />
            <span className="name">Lina</span>
          </div>
          <p className="excerpt">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively…</p>
          <div className="card-footer">
            <a href="#" className="read-more">Read more</a>
            <div className="views">
              <img src={eyeIcon} alt="views" />
              <span>251,232</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="pagination">
      <button className="page-btn">&#10094;</button>
      <button className="page-btn">&#10095;</button>
    </div>
  </section>
);

export default RelatedBlogs;