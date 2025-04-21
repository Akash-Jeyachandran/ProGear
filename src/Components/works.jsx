import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import carImage from "../Assets/Images/car1.png";
import onlineapproval from "../Assets/Logo/onlineapproval 1.png";
import driveworry from "../Assets/Logo/driveworryfree 1.png";
import find from "../Assets/Logo/findtherightcar 1.png";
import "../Styles/common.css";

// Features Array
const features = [
  {
    icon: find,
    title: "Find the right car",
    description: "Choose from a wide range of B2B assured cars with 300+ quality checks.",
  },
  {
    icon: onlineapproval,
    title: "Get online approval",
    description: "Submit your documents & get online eligibility approval.",
  },
  {
    icon: driveworry,
    title: "Drive worry-free",
    description: "Simply drive and enjoy the experience, just like you own it.",
  },
];

const Works = () => {
  return (
    <div className="works-container">
      <div className="content-wrapper">
        {/* Text Content */}
        <div className="text-content">
          <h2 className="works-title">How Pro Gear Works</h2>
          <p className="header-description">
            Subscribe to a car in India in just 3 simple steps and become a proud owner.
          </p>

          {/* Features List */}
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                <div className="feature-text">
                  <h5 className="feature-title">{feature.title}</h5>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Car Image (Right End) */}
        <div className="car-image-wrapper">
          <img src={carImage} alt="Car" className="car-image" />
        </div>
      </div>

      {/* Styling */}
      <style>
        {`
          .works-container {
            max-width: 1366px;
            width: 100%;
            padding: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            position: relative;
          }

          .content-wrapper {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
          }

          .text-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 2;
            max-width: 50%;
          }

          .works-title {
            font-size: 36px;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .header-description {
            font-size: 16px;
            font-weight: 500;
            text-align: left;
          }

          .features-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 25px;
          }

          .feature-text {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .feature-title {
            font-size: 18px;
            font-weight: 600;
            color: #000;
            text-align: left;
          }

          .feature-description {
            font-size: 16px;
            font-weight: 500;
            color: #4C4C4C;
          }

          /* Car Image Positioned at Right End */
          .car-image-wrapper {
            position: absolute;
            right: -147px;
            top: 58%;
            transform: translateY(-50%);
            display: flex;
            justify-content: flex-end;
            z-index: 1;
            max-width: 40%;
          }

          .car-image {
            width: 100%;
            height: auto;
            max-width: 542px;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .works-title {
              font-size: 32px;
            }

            .car-image-wrapper {
              max-width: 35%;
            }
          }

          /* Below 768px - Hide Image and Center Text */
          @media (max-width: 768px) {
            .content-wrapper {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .text-content {
              max-width: 100%;
              text-align: start;
            }

            .works-title {
              font-size: 28px;
              white-space: normal;
              text-align: center;
            }

            .header-description {
              text-align: center;
            }

            .car-image-wrapper {
              display: none; 
            }
          }

          @media (max-width: 480px) {
            .works-title {
              font-size: 24px;
              text-align: center;
            }

            .header-description {
              font-size: 14px;
              text-align: center;
            }

            .feature-title {
              font-size: 16px;
            }

            .feature-description {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Works;
