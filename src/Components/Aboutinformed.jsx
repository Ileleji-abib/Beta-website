import Responsible from '../assets/Responsible.jpg';
import Dataprivacy from '../assets/Dataprivacy.jpg'
import Safety from '../assets/Safety.jpg'
import Exception from '../assets/Exception.jpg'
import Perfection from '../assets/Perfection.jpg'






function Aboutinformed () {
    return(
     <>
     <section class="intro">
            <div class="container">
                <div class="informed-box">
                    <div class="section-content">
                       <div class="Abt-details">
                           
                           <div class="Abt-text">
                              <h1 class="">Stay informed about our actions</h1>
                              <div class="hero-btn">
                                 <p>We are committed to helping simplify complex process,
                                    keeping people safe, and making a positive impact
                                 </p>
                              </div>   
                           </div>

                           <div class="actions grid">
                                <div className="grid-card">
                                  <div className="card-content">
                                      <div className="abtimg-wrapper">
                                         <img src={Dataprivacy} alt="" />
                                      </div>

                                      <div className="Abt-text-container">
                                         <h4 className="Abt-header">Data and privacy</h4>

                                         <p className="abt-text">
                                            Protecting your data through secure systems, 
                                            transparent 
                                            practices, and responsible data handling.
                                         </p>
                                       </div>
                                  </div>
                               </div>

                               <div className="grid-card">
                                  <div className="card-content">
                                      <div className="abtimg-wrapper">
                                         <img src={Safety} alt="" />
                                      </div>

                                      <div className="Abt-text-container">
                                         <h4 className="Abt-header">Safety and optimization</h4>

                                         <p className="abt-text">
                                            Improving work efficiency and helping you optimize and
                                             scale safely.
                                         </p>
                                       </div>
                                  </div>
                               </div>

                               <div className="grid-card">
                                  <div className="card-content">
                                      <div className="abtimg-wrapper">
                                         <img src={Responsible} alt="" />
                                      </div>

                                      <div className="Abt-text-container">
                                         <h4 className="Abt-header">Responsible innovation</h4>

                                         <p className="abt-text">
                                            Building for the future creating meaningful impact
                                             while 
                                            considering its ethical, social, and environmental 
                                            responsiblities.
                                         </p>
                                       </div>
                                  </div>
                               </div>

                               <div className="grid-card">
                                  <div className="card-content">
                                      <div className="abtimg-wrapper">
                                         <img src={Perfection} alt="" />
                                      </div>

                                      <div className="Abt-text-container">
                                         <h4 className="Abt-header">Exceptionalism</h4>

                                         <p className="abt-text">
                                            Delivering outstanding quality, creativity, and
                                            performance. Excellence is not our goal-its our
                                            standard
                                         </p>
                                       </div>
                                  </div>
                               </div>

                               <div className="grid-card">
                                  <div className="card-content">
                                      <div className="abtimg-wrapper">
                                         <img src={Exception} alt="" />
                                      </div>

                                      <div className="Abt-text-container">
                                         <h4 className="Abt-header">Perfectionism</h4>

                                         <p className="abt-text">
                                            Giving Continuous refinement and exceptional experience
                                            with the best possible outcome in every product and 
                                            service. 
                                         </p>
                                       </div>
                                  </div>
                               </div>
                               

                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>

    
     </>
    )
}



export default Aboutinformed;
