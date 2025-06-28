import React from "react";
import "./CometChatPartnerPage.css";

const CometChatPartnerPage = () => {
  return (
    <section className="partner-hero">
      <div className="dot dot1" />
      <div className="dot dot2" />
      <div className="dot dot3" />
      <div className="dot dot4" />
      <div className="dot dot5" />
      <div className="dot dot6" />
      <div className="dot dot7" />
      <div className="dot dot8" />
      <div className="dot dot9" />

      <div className="comet comet1" />
      <div className="comet comet2" />
      <div className="comet comet3" />
      <div className="comet comet4" />
      <div className="comet comet5" />
      <div className="comet comet6" />

      <nav className="navbar">
        <div className="logo">
          comet<span>chat</span>
        </div>

        <ul className="nav-links">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Developers</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>

        <div className="nav-actions">
          <button className="nav-login">Log in</button>
          <button className="nav-demo">Schedule a demo</button>
        </div>
      </nav>

      <div className="partner-content">
        <div className="partner-left">
          <h1 className="partner-title">
            Join the CometChat <br /> partner universe
          </h1>
          <p className="partner-subtext">
            Create value for your clients, leveraging our <br />
            world-class technology. Partner with us and <br />
            grow your business!
          </p>
        </div>

        <div className="partner-form-box">
          <h2>Became a partner</h2>

          <div className="form-group">
            <label>Full name</label>
            <input type="text" placeholder="Type your name here..." />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <div className="input-with-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="email-icon"
              >
                <path d="M4 4h16v16H4z" fill="none" />
                <polyline points="4,4 12,13 20,4" />
              </svg>
              <input type="email" placeholder="Type your email..." />
            </div>
          </div>

          <div className="form-group">
            <label>Companies name</label>
            <input type="text" placeholder="Type your company’s name" />
          </div>

          <button className="submit-button">Submit application</button>
        </div>
      </div>
    </section>
  );
};

export default CometChatPartnerPage;
