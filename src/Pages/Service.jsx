import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Servicehero from "../Components/Servicehero";
import Serviceintro from "../Components/Serviceintro";
import Servicelist from "../Components/servicelist";
import Servicelist2 from "../Components/servicelist2";
import Servicelist3 from "../Components/servicelist3";
import Betaservices from "../Components/Betaservices";
import Resources from "../Components/Resources";
import Start from "../Components/Start";












function Service(){


    return(
        <>
        <Servicehero/>
        <Serviceintro/>
        <Servicelist/>
        <Servicelist2/>
        <Servicelist3/>
        <Betaservices/>
        <Resources/>
        <Start/>
        
        
        </>
    )
}

export default Service;