

import HeroIntro from "../Components/HeroIntro";
import Homehero from "../Components/HomeHero";
import SecondIntro from "../Components/SecondIntro";
import Operations from "../Components/Operations";
import Next from "../Components/Next";
import Choice from "../Components/Choice";
import FuturePlan from "../Components/FuturePlan";
import Cta from "../Components/CTA";



function Home(){


    return(
        <>
          
          <Homehero/>
          <HeroIntro/>
          <SecondIntro/>
          <Operations/>
          <Next/>
          <Choice/>
          <FuturePlan/>
          <Cta/>

        </>

    )
}

export default Home;