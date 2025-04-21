import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChevronDownIcon from "../Assets/Logo/+.png"; 
import ChevronUpIcon from "../Assets/Logo/-.png"; 
import "../Styles/common.css";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Subscription");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    "Subscription", "Booking", "Payment", "Maintenance", "Insurance",
    "Breakdown", "Legal", "Extension", "Foreclosure", "Guidelines"
  ];

  const faqData = {
    Subscription: [
      {
        question: "What is Pro Gear Car Lease/Subscription Program?",
        answer: "Pro Gear offers a flexible car lease/subscription service where you can drive a car without ownership hassles.",
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
    ],
    Booking: [
      {
        question: "How do I book a car?",
        answer: "You can book a car online through our platform by selecting your preferences and uploading necessary documents.",
      },
      {
        question: "Can I change or cancel my booking?",
        answer: "Yes, you can update your booking prior to confirmation or cancel it with applicable policies.",
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
    ],
    Payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, UPI, net banking, and approved corporate payment channels.",
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
    ],
    Maintenance: [
      {
        question: "Is car maintenance included in my subscription?",
        answer: "Yes, regular maintenance is included throughout your subscription term.",
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
    ],
    Insurance: [
      {
        question: "Do you provide insurance?",
        answer: "Yes, insurance is bundled with all subscriptions.",
      },
    ],
    Breakdown: [
      {
        question: "What happens in case of a car breakdown?",
        answer: "24x7 roadside assistance is included. Just call our support line.",
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
    ],
    Legal: [
      
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
    },

    {
        question: "Is there a contract to sign?",
        answer: "Yes, you’ll sign a digital lease agreement outlining all terms and conditions.",
      },
    ],
    Extension: [
      {
        question: "Can I extend my subscription?",
        answer: "Absolutely! You can easily request an extension through your dashboard or contact support.",
      },
    ],
    Foreclosure: [
      
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
    },
    
      {
        question: "Can I cancel early?",
        answer: "Yes, foreclosure is allowed with minimal notice and a small fee depending on tenure.",
      },
    ],
    Guidelines: [
      {
        question: "Are there any driving or usage restrictions?",
        answer: "Drive safely and maintain the vehicle. No unauthorized modifications or commercial use.",
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
    ],
  };

  const faqs = faqData[activeTab] || [];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content mt-3">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {/* FAQ Category Tabs */}
        <div className="faq-tabs">
          {categories.map((tab, index) => (
            <button
              key={index}
              className={`faq-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null); // Reset open accordion
              }}
            >
              {tab}
            </button>
          ))}
        </div>

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
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS STYLING */}
      <style>
        {`
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

          .faq-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 6px;
            margin-bottom: 30px;
          }

          .faq-tab {
            background-color: transparent;
            padding: 10px 15px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: black;
            border: 1px solid #ddd;
          }

          .faq-tab.active {
            background-color: #F7F7F7;
            color: black;
          }

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
