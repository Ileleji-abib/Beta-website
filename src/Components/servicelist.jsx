import Appdev from '../assets/app devops banner.jpg';



function Servicelist () {
    return(
     <>
       <section className="intro">
            <div className="container">
                <div class="Servicelist-box">
                    <div class="section-content">
                       <div class="hero-details">
                           <div class="service-intro-image-wrapper">
                              <img src={Appdev} alt="picture" />
                           </div>
                        <div className="List-text">
                            <h1 class="">Building digital platforms and experiences that drive 
                                innovation
                            </h1>
                               <p className="">Creating powerful digital platforms designed
                                 to help businesses grow, connect, and stand out in a modern world.
                                </p> 
                            
                                <div class="-btn">
                                 <a href="" class="click-buttons  buid">Build With Us</a>
                                 <a href="" class="click-buttons  contact">Contact Us</a>
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


export default Servicelist
