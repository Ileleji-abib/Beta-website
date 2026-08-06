import HeroVideo from '../assets/HeroVideo.mp4';






function Aboutconnect () {
    return(
     <>
     <section class="connect-intro">
            <div class="container">
                <div class="">
                    <div class="section-content">
                       <div class="Abt-unlock">
                           
                           <div class="video-text">    
                             <h1>Unlock new possibilities with our products</h1>
                                
                                <div class="abt-btn">
                                 <a href="" class="click-buttons  buid">Explore our
                                     technologies</a>
                                 <a href="" class="click-buttons  contact">Contact Us</a>
                                </div>    
                           </div>

                           <div class="service-intro-video-wrapper">
                              <video
                               src={HeroVideo}
                               autoPlay
                               muted
                               loop
                               playsInline
                               className=" hero-video"
>                            </video>
                           </div>
                    

                           
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        

    
     </>
    )
}



export default Aboutconnect ;
