import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Partners.css";
import CustomButton from "../Components/CustomButton";

// Partner Logos
import cleartax from "../Assets/Logo/cleartax.png";
import moneytap from "../Assets/Logo/moneytap.png";
import hike from "../Assets/Logo/hike.png";
import paperbook from "../Assets/Logo/pagarbook.png";
import indiagold from "../Assets/Logo/indiagold.png";

// Business Section Image
import businessPerson from "../Assets/Images/bussiness.png";

// Review Data
const reviews = [
  {
    name: "Samarth Chaturvedi",
    rating: 5,
    review:
      "Took a car on lease for 6 months from Pro Gear, around 3 weeks back, and till now the experience has been very smooth. The car was in good condition and the entire process was very smooth. I particularly want to mention Mr. Narpal, my point of contact, who was very persistent and helpful during the entire process. Overall, I have had a good experience till now.",
  },
  {
    name: "Vaibhav Kaushal",
    rating: 5,
    review:
      "Awesome service provided by Pro Gear and Mr. Narpal. He was there to help on each and every detail and the entire process smooth. Car was delivered within 5 days of booking. Better pricing compared to competitors.",
  },
  {
    name: "Rhonan Gurung",
    rating: 5,
    review:
      "I have been using their rented car for about a month now. The car has not shown any signs of problems and was delivered to me in peak condition. I'm quite happy with it too. Narpal Singh was my point of contact with the company. He has been extremely helpful in guiding me in the process of leasing. His prompt response to any query that I had, showed a lot of professionalism and was quick to earn my trust.",
  },
  {
    name: "Rhonan Gurung",
    rating: 3,
    review:
      "I have been using their rented car for about a month now. The car has not shown any signs of problems and was delivered to me in peak condition. I'm quite happy with it too. Narpal Singh was my point of contact with the company. He has been extremely helpful in guiding me in the process of leasing. His prompt response to any query that I had, showed a lot of professionalism and was quick to earn my trust.",
  },
];

const Partners = () => {
  return (
    <div className="partners-wrapper py-5">
      <div className="container my-5">
        {/* Corporate Partners Section */}
        <div className="text-center">
          <h6 className="text-muted">100+ Trusted</h6>
          <h2 className="fw-bold">Corporate Partners</h2>
          <div className="d-flex justify-content-center flex-wrap mt-4 partners-grid">
            {[cleartax, moneytap, hike, paperbook, indiagold].map((logo, index) => (
              <img key={index} src={logo} alt="Partner Logo" className="img-fluid partner-logo" />
            ))}
          </div>
        </div>

        {/* Business Section */}
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column flex-md-row align-items-center shadow mt-5 w-100 business-box">
            <div className="text-center text-md-end p-3">
              <h3 className="fw-bold">ProGear For Business</h3>
              <p>
                Want more savings with added tax benefits? Get all-inclusive monthly car
                subscription as Company Cars or via Salary Sacrifice.
              </p>
              <div className="d-flex justify-content-end">
                <CustomButton text="Learn More" />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3 mt-md-0">
              <img src={businessPerson} alt="Business" className="img-fluid business-image" />
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="text-center mt-5">
          <h2 className="fw-bold">Read what our customers say</h2>
        </div>

        <div className="row mt-4 justify-content-center">
          {reviews.map((review, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3">
              <div className="card shadow-sm p-3 w-100 review-card">
                <h5 className="fw-bold">{review.name}</h5>
                <p className="text-warning">{"⭐".repeat(review.rating)}</p>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
