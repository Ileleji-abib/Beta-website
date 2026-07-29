

import HeroIntro from "../Components/HeroIntro";
import Homehero from "../Components/Homehero";
import SecondIntro from "../Components/SecondIntro";
import Operations from "../Components/Operations";
import Next from "../Components/Next";
import Choice from "../Components/Choice";
import FuturePlan from "../Components/FuturePlan";
import CTA from "../Components/CTA";



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
          <CTA/>

        </>

    )
}

export default Home;