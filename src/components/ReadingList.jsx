import React from 'react';
import card1 from '../assets/images/Group 249.png';
import card2 from '../assets/images/Group 250.png';
import card3 from '../assets/images/Group 251.png';
import card4 from '../assets/images/Group 252.png';

const ReadingList = () => (
  <section className="reading-list">
    <h2>Reading blog list</h2>
    <div className="card-row">
      <div className="mini-card-1"><img src={card1} alt="UX/UI" /></div>
      <div className="mini-card-2"><img src={card2} alt="React" /></div>
      <div className="mini-card-3"><img src={card3} alt="PHP" /></div>
      <div className="mini-card-4"><img src={card4} alt="JavaScript" /></div>
    </div>
  </section>
);

export default ReadingList;
