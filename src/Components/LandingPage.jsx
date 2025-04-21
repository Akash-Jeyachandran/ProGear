import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Assets/Images/Bg-01.png";
import CustomButton from "../Components/CustomButton";
import "../Styles/common.css";
import "../Styles/LandingPage.css"; 

const LandingPage = () => {
  return (
    <div
      className="landing-container"
      style={{
        background: `url(${img}) center/cover no-repeat`,
      }}
    >
      <div className="content-box">
        <h1 className="fw-bold">
          <span className="sub-title">The smart way to</span>
          <span className="main-title">OWN A CAR</span>
        </h1>
        <p className="fw-semibold text-dark">All-inclusive Car Subscription</p>

        <div className="d-flex justify-content-center">
          <CustomButton text="Browse Cars" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
