import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../Assets/Images/Bg-02.png";
import downpayment from "../Assets/Logo/downpayment 1.png"; 
import Vector from "../Assets/Logo/Vector.png"; 
import Service from "../Assets/Logo/Vector (1).png";
import tax from "../Assets/Logo/Vector (2).png";
import duration from "../Assets/Logo/Vector (3).png";
import insurance from "../Assets/Logo/Vector (4).png";
import ser24 from "../Assets/Logo/Vector (5).png";
import Support from "../Assets/Logo/Vector (6).png";
import "../Styles/common.css"


const features = [
  { icon: downpayment, text: "Zero Down-Payment" },
  { icon: duration, text: "Flexible Tenure" },
  { icon: Vector, text: "White Number Plate" },
  { icon: insurance, text: "B2B Insurance" },
  { icon: Service, text: "Service & Maintenance" },
  { icon: ser24, text: "24x7 RSA" },
  { icon: tax, text: "Tax Benefits" },
  { icon: Support, text: "Finance Support" }
];

const Description = () => {
  return (
    <>
      <div className=" description-container">
        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="screen-size description-content">
          <div className="text-light fs-4 fw-normal py-2">What Is All-Inclusive</div>
          <div className="text-light fs-1 fw-bold py-2">Smart Car Subscription?</div>
          <div className="text-light fs-6 fw-medium px-3 py-3">
            Pro Gear is India's first monthly car subscription service offering certified pre-owned cars 
            for personal and business use in a flexible and affordable way.
          </div>
        </div>

        {/* Feature List */}
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item px-3 py-3">
              <img src={feature.icon} alt="icon" className="feature-icon" />
              <p className="fs-5 text-light">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          .description-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            min-height: 100vh;
            text-align: center;
            background-image: url(${bgImage});
            background-size: cover;
            background-position: center;
            padding: 40px 20px;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
          }

          .description-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
            width: 100%;
            padding: 20px;
          }

          .feature-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding-top: 20px;
            position: relative;
            z-index: 2;
          }

          .feature-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 24px;
            padding: 10px;
          }

          .feature-icon {
            
            object-fit: cover;
          }

          @media (max-width: 425px) {
            .feature-grid {
              display: flex;
              flex-direction: column;
              align-items: start;
              padding-top: 5px;
            }
          }
           
        `}
      </style>
    </>
  );
};

export default Description;
