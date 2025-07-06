import React from 'react';
import m1 from '../assets/images/market1.png';
import m2 from '../assets/images/market2.png';
import m3 from '../assets/images/market3.png';
import m4 from '../assets/images/market4.png';
import designIcon from '../assets/images/design.png';
import clockIcon from '../assets/images/clock.png';
import avatar from '../assets/images/Group 237.png';

const courses = [m1, m2, m3, m4];

const MarketingArticles = () => (
  <section className="marketing-articles">
    <div className="section-header">
      <h2 className="h2-market">Marketing Articles</h2>
      <span className="see-all" onClick={() => alert('Redirecting to full list...')}>See all</span>
    </div>
    <div className="marketing-cards">
      {courses.map((img, i) => (
        <div className="market-card" key={i}>
          <img src={img} alt="Course" className="market-img" />
          <div className="meta-top">
            <span className="meta-item">
              <img src={designIcon} alt="Design icon" />Design
            </span>
            <span className="meta-item">
              <img src={clockIcon} alt="Clock icon" />3 Month
            </span>
          </div>
          <h3>AWS Certified solutions Architect</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <div className="author-price">
            <div className="user">
              <img src={avatar} className="avatar2" alt="Lina" />
              <span className="name2">Lina</span>
            </div>
            <div className="price">
              <span className="old">$100</span>
              <span className="new">$80</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MarketingArticles;