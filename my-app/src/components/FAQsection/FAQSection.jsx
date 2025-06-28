import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  { question: "This is a frequently asked question?" },
  {
    question:
      "This is a very long frequently asked question about our services with more than one line?",
  },
  { question: "This is a frequently asked question?" },
  { question: "This is a question?" },
  { question: "This is a question?" },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-heading">
        <p className="faq-subtitle">FAQ's</p>
        <h2 className="faq-title">
          We want to help you
          <br />
          with all your doubts
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question-row">
              <div className="faq-question">{faq.question}</div>
              <div
                className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {activeIndex === index && faq.answer && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
