import Myimage from '../assets/x24.jpg';
import Myimage2 from '../assets/x27.jpg';
import Myimage3 from '../assets/x26.jpg';






function HeroIntro() {

 
  
  



  















  return(
    <>
    <section className="info" >
      <div className="container">
        <div className="info-box">
        <div className="info-details">
          <h2 className="section-header">From Startups to Enterprises-This is how Beta
            is powering innovation
          </h2>
         <p>
            Focused on building,and managing powerful digital platforms for modern businesses
            that improves workflow, strenghten security, and simplify operations,
          </p>
        </div>

        <div className="listing">
          <div className="solutions-content"> 
            <div className="img-wrapper">
             <img src={Myimage}alt="gr" />
            </div>
            <div className="write-up">
              <h4>Integrated Security Solutions</h4>
             <p>
               Refined solutions approach designed to eliminate friction and provide
               absolute clarity at every stage of your acquisition
             </p>
            </div>
          </div>

          <div className="solutions-content"> 
            <div className="img-wrapper">
              <img src={Myimage2}alt="gr" />
            </div>
            <div className="write-up">
              <h4>Platform Development</h4>
              <p>
               Refined solutions approach designed to eliminate friction and provide
               absolute clarity at every stage of your acquisition
              </p>
            </div>
          </div>

          <div className="solutions-content"> 
            <div className="img-wrapper">
              <img src={Myimage3}alt="gr" />
            </div>
            <div className="write-up">
              <h4>Web & Apllication Development</h4>
              <p>
               Refined solutions approach designed to eliminate friction and provide
               absolute clarity at every stage of your acquisition
              </p>
            </div>
          </div> 
        </div>

      </div>
      </div>
    </section>
    </>
  )
}

export default HeroIntro;