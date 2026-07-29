import { useState, useEffect } from "react";
import heroslide from '../Data/ServiceheroData'
import './service.css'



function Servicehero () {
 const [currentSlide, setCurrentSlide] = useState(0)
 useEffect(()=>{
    const interval = setInterval(()=>{setCurrentSlide((prev) =>(prev + 1)% heroslide.length);}, 4000);
    return()=> clearInterval(interval);
 },[]);

   const nextslide= ()=>{
      setCurrentSlide((prev) =>(prev + 1)% heroslide.length);
   }

    const prevslide= ()=>{
      setCurrentSlide((prev) =>(prev - 1)% heroslide.length);
   }

 return(
      <section className="hero">
         {heroslide.map((slide, index)=>(
            <div
            key={index}
            className={`slide ${index=== currentSlide ? "active" : ""}`}
            style={{backgroundImage: `url(${slide.image})`}}
            >
              

              <div className="overlay">
                   <div className="hero-content">
                     <p className="1">{slide.text1}</p>
                     <p className="2">{slide.text2}</p>
                   </div>
               </div>
            </div>
         ))}

         <div className ="arrow">
            <button className="left" onClick={prevslide}>
              <i class="fa-solid fa-angle-left"></i>
            </button>

            <button className="right" onClick={nextslide}>
             <i class="fa-solid fa-angle-right"></i>
            </button>
         </div>

         <div className ="active-dots">
            {heroslide.map((_, index) =>(
            <button key={index} className={`dot ${index === currentSlide ? "active-dot" : ""}`}
               onClick={()=> 
                setCurrentSlide(index)
               }
            />
            ))}
            
         </div>

        

         
        

          


       
      </section>
   )
}


export default Servicehero