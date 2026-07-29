
import { useEffect, useRef, useState } from "react";
import  slides  from "../Data/Aboutherodata.js";
console.log(slides)

function Abouthero() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        Math.max(
          (-rect.top) /
            (section.offsetHeight - window.innerHeight),
          0
        ),
        1
      );

      const index = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length)
      );

      setActive(index);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSlide = (index) => {
    const section = sectionRef.current;

    if (!section) return;

    const totalScrollable =
      section.offsetHeight - window.innerHeight;

    const targetPosition =
      section.offsetTop +
      (totalScrollable / slides.length) * index;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
     className="story-section"
    >
      <div className="sticky-wrapper">

        {/* VIDEOS */}
        {slides.map((slide, index) => (
          <video
            key={slide.id}
            autoPlay
            muted
            loop
            playsInline
            className={`bg-video ${
              active === index ? "active" : ""
            }`}
          >
            <source
              src={slide.video}
              type="video/mp4"
            />
          </video>
        ))}

        <div className="overlay" />

        {/* CONTENT */}
        <div className="about-content">
          

          <p>{slides[active]. text}</p>

          <button className="cta-btn">
            {slides[active].buttonText}
          </button>

        </div>

        {/* INDICATORS */}
        <div className="indicator-wrapper">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`indicator ${
                active === index ? "active" : ""
              }`}
              onClick={() => scrollToSlide(index)}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Abouthero