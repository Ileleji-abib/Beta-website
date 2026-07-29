import { useState, useRef, useEffect } from "react";
import faqs from "../Data/faqs"

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef= useRef(null)


  useEffect(() => {
  function handleClickOutside(event) {
    if (faqRef.current && !faqRef.current.contains(event.target)) {
      setOpenIndex(null);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

 

  return (
    <section className="Qintro">
      <div className="container">
        <div className="Q-box">
          <div className="section-content">
            <div className="Q-details">
              <div className="Q-header">
                <h1>
                  Getting started? Your Frequently Asked Questions Answered
                </h1>
              </div>

              <div className="sub-header">
                <h3>
                  Everything you need to know before starting your project with
                  Beta.
                </h3>
              </div>
            </div>

            <div className="questions-section">
              <div className="questions-content" ref={faqRef}>
                {faqs.map((faq, index) => (
                  <div className="faq-items" key={index}>
                    <button
                      className="faq-question"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`icon ${
                          openIndex === index ? "rotate" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`faq-answers ${
                        openIndex === index ? "active" : ""
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;