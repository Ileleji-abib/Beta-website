import Commitment from '../assets/Commitment.jpg';




function  Aboutcommitment () {
    return(
     <>
     <section className="intro">
        <div className="container">
            <div className="intro-content">
                <div className="intro-text">
                    <div className="intro-header">
                        <h2>Our commitment</h2>
                    </div>
                    <div className="write-up2">
                       <p>
                         At Beta, everything we do we believe in
                         challenging the status quo, and how do we challenge the 
                         status quo?. We challenge it by creating solutions that are 
                         beautifully designed,  user friendly, with continuous 
                         improvement and scalability. We are helping to create the 
                         next of evolution of operational efficiency and automation.
                       </p>

                        <div class="-btn">
                         <a href="" className="">Build With Us</a>
                         <a href="" className="">Contact Us</a>
                        </div>
                    </div>

                    


                </div>

                <div className="service-intro-image-wrapper">
                    <img src={Commitment } alt="picture" />

                </div>



            </div>
        </div>
     </section>
     
     
     
     
     

     
     
    </>

    )
}



export default Aboutcommitment;
