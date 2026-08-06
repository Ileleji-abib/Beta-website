import { Link } from "react-router-dom"
import Logo from '../assets/beta logo.svg';
import logoIcon from '../assets/beta logo icon.svg';
import { useState,useRef, useEffect } from "react";
import gsap from "gsap";




function MainsecondNavbar (){
    const [isOpen, setIsOpen] = useState(false);
     useEffect(()=>{
        if(isOpen){
            document.body.style.overflow="hidden";
        }
        else{
            document.body.style.overflow="auto";
        }

        return()=>{
            document.body.style.overflow="auto"
        };
    },[isOpen]);

    const closeMenu= function (){
       setIsOpen(false);
    }


   const sidebarRef= useRef(null)
  
    

    const [languageOpen, setLanguageOpen] = useState (false);

    const [selectedLanguage, setSelectedLanguage]= useState("English");
    const dropdownRef= useRef(null);

    const handleLanguageSelect = (language) =>{
        setSelectedLanguage(language);
        setLanguageOpen(false);
    };

    useEffect(()=>{
        const handleClickoutside=(event)=>{
            if(dropdownRef.current && ! dropdownRef.current.contains(event.target)){
                setLanguageOpen(false)
            }
        };
        document.addEventListener('mousedown', handleClickoutside);
        return()=>{
            document.removeEventListener("mousedown", handleClickoutside)
        }

    },[]);

    useEffect(() => {

       gsap.set(sidebarRef.current,{
        x:"-100%"
      });

    },[]);

    useEffect(() => {

    if(isOpen){

        gsap.to(sidebarRef.current,{
            x:0,
            duration:0.7,
            ease:"power4.out"
        });

        }else{

          gsap.to(sidebarRef.current,{
              x:"-100%",
              duration:0.55,
              ease:"power4.in"
            });

        }

    },[isOpen]);

   




   
  
    return(
        <>
            <div className= "second-header">
                <div className="container">
                    <div className="second-section">
                        <nav className="x22">

                            <div className="placeholder">
                                <div className="x23">
                                   <div className="nav-button">
                                      <div className="hoverbg">
                                      <button id="menu-open-button" className="fa-solid fa-bars"
                                         onClick=   {() =>setIsOpen(true)}>
                                      </button>
                                      </div>

                                    </div>
                                </div>


                                <div className="logo-section">
                                    <div className="logo">
                                     <img src={logoIcon} alt="brand-logo-sidebar-nav"
                                      className="brand-logo"/>
                                    </div>
                                    <p className="logotext">Beta</p>
                                </div>
                            </div>

                               







                            
                        </nav>
                    </div>

                    

                </div>
            </div>


            <div className="slidebar-nav" ref={sidebarRef}>
                
                <div className="slide-header">
                    <div className="nav-logo">
                     <img src={Logo} alt="brand-logo-sidebar-nav" />
                    </div>

                    <nav >
                     <button id="menu-close-button" className="fa-solid fa-xmark  hoverbg"
                          onClick={() => setIsOpen(false)}>

                        </button>
                    </nav>
                </div>

                <div className="nav-slide-top-nav">
                    <div className="top-slidenav-links">
                        <ul className="slide-nav-top-menu-links">
                            <li className="slide-nav-list-items" ref={dropdownRef}>
                               <button className="slideicon" onClick={()=> setLanguageOpen(!
                                 languageOpen)}><i className="fa-solid fa-globe"></i> {""}
                                  {selectedLanguage} {""} <i className={`fa-solid fa-angle-down 
                                    ${languageOpen ? "rotate" : ""}`}></i>
                                </button> 

                               {languageOpen &&(
                              <div className="slide-language-drop-down">
                                  <ul className="language-list">
                                      <li className="languages"><button onClick=
                                       {()=>handleLanguageSelect("English")}>English</button>
                                      </li>

                                     
                                      <li className="languages"><button onClick=
                                       {()=>handleLanguageSelect("Spanish")}>Spanish</button>
                                      </li>

                                      <li className="languages"><button onClick=
                                        {()=>handleLanguageSelect("French")}>French</button>
                                      </li>

                                      <li className="languages"><button onClick=
                                        {()=>handleLanguageSelect("Arabic")}>Arabic</button>
                                      </li>

                                    </ul>

                                </div>
                                )}
                            </li>


                            <li className="slide-nav-list-items">
                                <button className="slideicon">
                                  Support
                                </button>
                            </li>

                            <li className="slide-nav-list-items">
                                <button className="slideicon">
                                    <span>Contact us</span>
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>
                            </li>
                                                   

                        </ul>
                    </div>
                </div>



                <div className="sidebar-links-container">
                    <ul className="sidebar-links">

                        <li className="sidebar-links-items"><Link className="slide-nav-links"
                         to="/About" onClick={closeMenu}>About Beta</Link></li>

                        <li className="sidebar-links-items"><Link className="slide-nav-links"
                         to="/Service" onClick={closeMenu}>Our Solutions</Link></li>

                        <li className="sidebar-links-items"><Link className="slide-nav-links"
                         to="/">Explore Beta</Link></li>

                        <li className="sidebar-links-items  bottom"><Link className="slide-nav-
                         link" to="/Pricing" onClick={closeMenu}>Pricing</Link>
                        </li>

                        <li className="sidebar-links-items"><Link className="slide-nav-links"
                         to="/Service">Explore Beta</Link>
                        </li>

                                                    


                    </ul>






                </div>










            </div>
        </>
    )


}

export default MainsecondNavbar;



