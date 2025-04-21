import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tick from "../Assets/Logo/fi_check.png";  
import untick from "../Assets/Logo/close.png"; 
import "../Styles/common.css";

const SubscriptionPlan = () => {
  // Table data
  const features = [
    "Zero Down Payment & Road Tax",
    "No Financing Process",
    "Cheaper than EMI", 
    "Annual Insurance Included",
    "Free Car Service & Maintenance",
    "Free 24x7 All India Road Side Assistance",
    "End to End Warranty",
    "Hassle Free Insurance Claims",
    "Stress Free Car Maintenance",
    "Wide Range of PPP Certified Cars to Choose",
    "Flexible Tenure & Easy Extension Process",
    "No Dealer Visit at Time of Purchase/Sale",
  ];

  return (
    <div className="subscription-container ">
      <div className="screen-size container">
        {/* Heading Section (Remains Unchanged) */}
        <div className="text-center">
          <h5 className="text-muted heading-subtitle">Save Money With</h5>
          <h2 className="main-heading">ProGear Subscription</h2>
          <p className="description">
            Subscribing to a car is not just flexible and convenient, it might
            also save <br /> your money as compared to buying a car on loan.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="table-wrapper">
          <div className="table-container">
            <table className="table text-center align-middle">
              {/* Table Head */}
              <thead>
                <tr>
                  <th className="text-start  bg-black text-white"></th>
                  <th className="text-center  bg-black text-white">Pro Gear Subscription</th>
                  <th className="text-center  bg-black text-white">Buy</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index}>
                    <td className="text-start">{feature}</td>
                    <td className="text-success">
                      <img src={tick} alt="Included" className="icon" />
                    </td>
                    <td className="text-danger">
                      <img src={untick} alt="Not Included" className="icon small-icon" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CSS STYLING */}
      <style>
        {`
          /* Subscription Section */
          .subscription-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #E0E0E0;
            width: 100%;
            padding: 80px 0px;
          }

          /* Heading Styling (Remains Unchanged) */
          .heading-subtitle {
            font-size: 24px;
            font-weight: 400;
            margin-bottom: 10px;
          }

          .main-heading {
            font-size: 35px;
            font-weight: 700;
            text-align: center;
          }

          .description {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 40px;
          }

          /* Table Wrapper - Centers the Table */
          .table-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }

          /* Table Container */
          .table-container {
            width: 100%;
            max-width: 846px;
            background-color: #fff;
            border-radius: 12px; /* Applies Rounded Corners */
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            overflow: hidden; /* Ensures Table Stays Inside Rounded Borders */
          }

          /* Table Styling */
          .table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 12px; /* Applies Rounded Corners */
            overflow: hidden;
          }

          .table thead {
            background-color: black;
            color: white;
          }

          .table th, .table td {
            padding: 15px;
            font-size: 16px;
          }

          .icon {
            width: 24px;
            height: 24px;
          }

          .small-icon {
            width: 15px;
            height: 15px;
          }

          /* Responsive Table: Auto-Scales Instead of Scrolling */
          @media (max-width: 1024px) {
            .table-container {
              width: 95%;
            }

            .table th, .table td {
              padding: 12px;
              font-size: 14px;
            }

            .icon {
              width: 20px;
              height: 20px;
            }

            .small-icon {
              width: 12px;
              height: 12px;
            }
          }

          @media (max-width: 768px) {
            .table-container {
              width: 100%;
            }

            .table th, .table td {
              padding: 10px;
              font-size: 13px;
            }

            .icon {
              width: 18px;
              height: 18px;
            }

            .small-icon {
              width: 10px;
              height: 10px;
            }
          }

          @media (max-width: 480px) {
            .table-container {
              width: 100%;
            }

            .table th, .table td {
              padding: 8px;
              font-size: 12px;
            }

            .icon {
              width: 16px;
              height: 16px;
            }

            .small-icon {
              width: 10px;
              height: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SubscriptionPlan;
