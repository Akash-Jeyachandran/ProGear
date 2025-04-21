import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChevronDownIcon from "../Assets/Logo/+.png"; 
import ChevronUpIcon from "../Assets/Logo/-.png"; 
import "../Styles/common.css";

const FAQ = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  
  const faqs = [
    {
      question: "What is Pro Gear Car Lease/Subscription Program?",
      answer: "It's a new method of owning new and pre-owned cars of your choice, without having to worry about a down payment, bank debt, vehicle registration, insurance, upkeep, or servicing for a specific period. These are all packaged together and offered to you as a complete package.",
    },
    {
      question: "What are the benefits of the Pro Gear Car Subscription Program?",
      answer: "Benefits include zero down payment, no financing process, lower costs than EMI, and full maintenance coverage.",
    },
    {
      question: "For how long can I subscribe to a car?",
      answer: "You can subscribe for flexible tenure options ranging from a few months to several years.",
    },
    {
      question: "Is there a KMs limit to how much I can drive?",
      answer: "Yes, depending on your plan, there might be a fair usage policy on kilometers driven.",
    },
    {
      question: "How is Pro Gear Subscription different from Car Rental or Self Drive Services?",
      answer: "Unlike rentals, Pro Gear provides long-term car usage with full maintenance, insurance, and no ownership hassle.",
    },
    {
      question: "What are the services included in the Pro Gear Subscription Program?",
      answer: "Services include insurance, maintenance, 24x7 roadside assistance, and an easy extension process.",
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h2 className="faq-header">
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openIndex === index ? (
                      <img src={ChevronUpIcon} alt="Collapse" className="custom-icon" />
                    ) : (
                      <img src={ChevronDownIcon} alt="Expand" className="custom-icon" />
                    )}
                  </span>
                </button>
              </h2>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS STYLING */}
      <style>
        {`
          /* FAQ Section */
          .faq-container {
            background-color: #E6E6E6;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 50px 0;
          }

          .faq-content {
            max-width: 1168px;
            width: 100%;
            padding: 20px;
          }

          .faq-title {
            text-align: center;
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 30px;
          }

          /* FAQ Tabs */
          .faq-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 4px;
            margin-bottom: 30px;
          }

          .faq-tab {
            background-color: transparent;
            // border: 1px solid #ccc;
            padding: 10px 15px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: black
          }

          .faq-tab.active {
            background-color: #F7F7F7;
            color: black;
          }

          /* FAQ Accordion */
          .faq-accordion {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .faq-item {
            background-color: #F7F7F7;
            border-radius: 12px;
            overflow: hidden;
            transition: 0.3s;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .faq-question {
            background: none;
            border: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            font-weight: 600;
            font-size: 16px;
            padding: 20px;
            cursor: pointer;
            transition: background 0.3s;
            color: black;
          }

          .faq-icon {
            display: flex;
            align-items: center;
          }

          .custom-icon {
            width: 20px;
            height: 20px;
          }

          .faq-answer {
            padding: 15px 20px;
            font-size: 16px;
            line-height: 1.6;
            background: white;
            border-top: 1px solid #ddd;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .faq-title {
              font-size: 32px;
            }

            .faq-tab {
              font-size: 12px;
              padding: 8px 12px;
            }

            .faq-question {
              font-size: 14px;
              padding: 15px;
            }

            .faq-answer {
              font-size: 14px;
              padding: 12px 15px;
            }
          }

          @media (max-width: 480px) {
            .faq-title {
              font-size: 28px;
            }

            .faq-tabs {
              gap: 5px;
            }

            .faq-tab {
              font-size: 11px;
              padding: 6px 10px;
            }

            .faq-question {
              font-size: 13px;
              padding: 12px;
            }

            .faq-answer {
              font-size: 13px;
              padding: 10px 12px;
            }

            .custom-icon {
              width: 16px;
              height: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FAQ;
