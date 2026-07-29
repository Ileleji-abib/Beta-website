import { useState, useRef, useEffect } from "react";




function Operations() {

  const Listref = useRef(null)
const [Activebutton, SetActivebutton] = useState(0)

useEffect(()=>{
  const container=Listref.current
    if (!container) return;
   const handleScroll=() =>{
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0].offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
    SetActivebutton(index);
   }
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);

},[]);

  return(
    <>
    <section className="how">
      <div className="container">
        <div className="how-box">
          <div className="how-content">
            <div className="how-header">
              <h2>How we Operate</h2>
              <p className="text">Simple. Effective. Reliable.</p>
            </div>
            <div className="op-process-listing">
              <div className="list-content" ref={Listref}>

                <div class="list-details">
                  <div className="list-write-up">
                    <h4>Understanding First</h4>
                    <p>
                     We begin every project by gaining deep insight into the problem, the audience,
                     and the goal. Ensuring every decision is informed and intentional.
                    </p>
                  </div>
                </div> 

                <div class="list-details">
                  <div className="list-write-up">
                    <h4>Structured Creation</h4>
                    <p>
                     Refined solutions approach designed to eliminate friction and provide
                     absolute clarity at every stage of your acquisition
                    </p>
                  </div>
                </div> 

                <div class="list-details">
                  <div className="list-write-up">
                    <h4>Collaborative Process</h4>
                    <p>
                     Refined solutions approach designed to eliminate friction and provide
                     absolute clarity at every stage of your acquisition
                    </p>
                  </div>
                </div> 

                <div className="list-details"> 
                  <div className="list-write-up">
                    <h4>Collaborative Process</h4>
                    <p>
                     Refined solutions approach designed to eliminate friction and provide
                     absolute clarity at every stage of your acquisition
                    </p>
                  </div>
                </div> 




              </div>
              <div className="carousel-dots">
                {[0, 1, 2,3].map((i) => (
                  <span key={i} className={Activebutton === i ? "active" : ""}></span>
                ))}
              </div>



            </div>
         


          </div>
 
        </div>
      </div>
    </section>
    </>
  )
}

export default Operations;
