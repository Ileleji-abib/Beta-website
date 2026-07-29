import MainNavbar from "../Components/MainNavbar"
import MainsecondNavbar from "../Components/MainsecondNavbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"





function Layout(){
    return(
        <>
        <MainNavbar/>
        <MainsecondNavbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>

        
        
        
        
        
        </>
    )

}

export default Layout;