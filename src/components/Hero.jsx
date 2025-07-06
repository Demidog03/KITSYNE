import React from 'react';
import heroImage from '../assets/images/main_article_image.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>By ThemeDomain in <span className="highlight">Inspiration</span></p>
        <h1>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="button-hero">Start reading now</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
