import React from 'react';
import kitsyneLogo from '/kitsyne.jpg';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={kitsyneLogo} alt="KITSYNE logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
      <div className="auth-button">
        <button onClick={() => alert("Log In clicked!")}>Log In</button>
      </div>
    </header>
  );
}
