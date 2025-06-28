import React from "react";
import "./GetStartedSection.css";

const GetStartedSection = () => {
  return (
    <section className="get-started-section">
      <div className="star-dots-background" />
      <div className="planet planet-left" />
      <div className="planet planet-right" />
      <div className="dot dot1" />
      <div className="dot dot2" />
      <div className="dot dot3" />
      <div className="dot dot4" />
      <div className="dot dot5" />
      <div className="dot dot6" />
      <div className="dot dot7" />
      <div className="dot dot8" />
      <div className="dot dot9" />
      <div className="dot dot10" />
      <div className="dot dot11" />
      <div className="dot dot12" />
      <div className="dot dot13" />
      <div className="dot dot14" />
      <div className="dot dot15" />

      <svg
        className="arc-svg"
        width="1440"
        height="462"
        viewBox="0 0 1440 462"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1616.27 324.722C1604.95 111.693 1020.29 -30.4211 310.386 7.30194C-399.513 45.0249 -965.823 248.3 -954.503 461.329"
          stroke="url(#paint0_linear_2174_907)"
          strokeOpacity="0.14"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2174_907"
            x1="1007.5"
            y1="41.9999"
            x2="301"
            y2="17.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FAFAFF" stopOpacity="0.26" />
            <stop offset="1" stopColor="#FAFAFF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      <div className="get-started-content">
        <h2 className="get-started-title">Get started for free</h2>
        <p className="get-started-subtext">
          Build and test for as long as you need.
          <br />
          Pick a plan when you’re ready.
        </p>
        <div className="get-started-buttons">
          <button className="btn btn-dark">Start free trial</button>
          <button className="btn btn-purple">Schedule a demo</button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
