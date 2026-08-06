import { Link } from "react-router-dom"



function Homehero(){
  return(
    <>
      <section className="hero-section">
        <div className="story">
          <div className="hero-box">
            <div className="hero-section-details">
              <div className="intro5">
                    <div className="intro-logo">
                      <img src={null} alt="hero" />
                      <img src={null} alt="hero" />
                    </div>
                    <h2 className="title">
                     Where Solutions Begin-Built to Solve. Designed to Evolve
                    </h2>

                    <div className="hero-btn">
                      <a href="" class="click-buttons  buid">Build With Us</a>
                      <a href="" class="click-buttons  contact">Contact Us</a>
                    </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Homehero;