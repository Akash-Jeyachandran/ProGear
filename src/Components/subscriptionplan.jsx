import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tick from "../Assets/Logo/fi_check.png";  
import untick from "../Assets/Logo/close.png"; 
import "../Styles/common.css";
import "../Styles/SubscriptionPlan.css"; // New external stylesheet

const SubscriptionPlan = () => {
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
    <div className="subscription-container">
      <div className="screen-size container">
        <div className="text-center">
          <h5 className="text-muted heading-subtitle">Save Money With</h5>
          <h2 className="main-heading">ProGear Subscription</h2>
          <p className="description">
            Subscribing to a car is not just flexible and convenient, it might
            also save <br /> your money as compared to buying a car on loan.
          </p>
        </div>

        <div className="table-wrapper">
          <div className="table-container">
            <table className="table text-center align-middle">
              <thead>
                <tr>
                  <th className="text-start bg-black text-white"></th>
                  <th className="text-center bg-black text-white">Pro Gear Subscription</th>
                  <th className="text-center bg-black text-white">Buy</th>
                </tr>
              </thead>
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
    </div>
  );
};

export default SubscriptionPlan;
