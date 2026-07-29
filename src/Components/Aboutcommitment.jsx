import Commitment from '../assets/Commitment.jpg';






function Aboutcommitment () {
    return(
     <>
     <section class="intro">
            <div class="container">
                <div class="hero-box">
                    <div class="section-content">
                       <div class="hero-details">
                           
                           <div class="List-text">
                               <h1 className="intro-header">Our commitment</h1>
                        
                                <p className="write-up2">At Beta, everything we do we believe in
                                     challenging the status quo, and how do we challenge the 
                                     status quo?. We challenge it by creating solutions that are 
                                     beautifully designed,  user friendly, with continuous 
                                     improvement and scalability. We are helping to create the 
                                     next of evolution of operational efficiency and automation.
                                </p>
                            
                                <div class="abt-btn">
                                 <a href="" class="click-buttons  buid">Build With Us</a>
                                 <a href="" class="click-buttons  contact">Contact Us</a>
                                </div>
                           </div>

                           <div class="service-intro-image-wrapper">
                               <img src={Commitment } alt="picture" />
                           </div>
                    

                           
                        </div> 
                    </div>
                </div>
            </div>
        </section>

    
     </>
    )
}



export default Aboutcommitment;
