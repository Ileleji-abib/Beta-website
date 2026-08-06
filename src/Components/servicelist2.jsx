import cms from '../assets/cms management.jpg';







function Servicelist () {
    return(
     <>
     <section class="intro">
            <div class="container">
                <div class="Servicelist2-box">
                    <div class="section-content">
                       <div class="hero-details">               
                           <div class="List-text">
                               <h1 class="">Keeping your digital systems Running Seamlessly</h1>
                               
                                <p className="">Ensuring your digital platforms remain secure,
                                 optimized, reliable, and ready for continuous performance.
                                </p>
                            
                                <div class="-btn">
                                 <a href="" class="click-buttons  buid">Build With Us</a>
                                 <a href="" class="click-buttons  contact">Contact Us</a>
                                </div>
                           </div>

                           <div class="service-intro-image-wrapper">
                              <img src={cms} alt="picture" />
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
