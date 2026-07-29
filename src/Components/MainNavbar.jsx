import { Link } from "react-router-dom"
import '../App.css'
import { useState,useRef, useEffect } from "react";











function MainNavbar() {
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

   
   
   
    

  


   
 return(
    <>
    <header className="section-head">
        <div className="container">
            <div className="nav-top">
                <div className="top-nav-links">
                    <ul className="top-menu-links">
                        <li className="list-items" ref={dropdownRef}>
                            <button className="list-links" onClick={()=> setLanguageOpen(! 
                                languageOpen)}><i className="fa-solid fa-globe"></i> {""} 
                                {selectedLanguage} {""} <i className={`fa-solid fa-angle-down 
                                    ${languageOpen ? "rotate" : ""}`}></i></button>
                            {languageOpen &&(
                            <div className="language-drop-down-menu">
                                <ul className="language-list">
                                    <li className="languages"><button onClick={()=>handleLanguageSelect("English")}>English</button></li>
                                   

                                    <li className="languages"><button onClick={()=>handleLanguageSelect("Spanish")}>Spanish</button></li>

                                    <li className="languages"><button onClick={()=>handleLanguageSelect("French")}>French</button></li>

                                    <li className="languages"><button onClick={()=>handleLanguageSelect("Arabic")}>Arabic</button></li>
                                </ul>
                            </div>
                            )}
                        </li>


                        <li className="list-items">
                            <button className="list-links"> Support</button>
                           
                        </li>

                        <li className="list-items">
                          <div className="list-links">Contact us<i className="fa-solid fa-angle-down"></i></div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </header>
    
    </>
 )
}

export default MainNavbar;