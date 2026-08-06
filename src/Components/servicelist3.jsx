import Integration from '../assets/system integration.jpg';






function Servicelist () {
    return(
     <>
     <section class="intro">
            <div class="container">
                <div class="Servicelist3-box">
                    <div class="section-content">
                       <div class="hero-details">
                           <div class="service-intro-image-wrapper">
                               <img src={Integration} alt="picture"/>
                           </div>
                    
                           <div class="List-text">
                               <h1 class="">Connecting Technologies for Smarter Operations</h1>
                        
                               <p className="">Bringing your technologies together to create smarter
                                 workflows, seamless communication, and efficient operations.
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
