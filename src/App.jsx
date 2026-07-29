

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Pricing from './Pages/Pricing'
import About from './Pages/About'
import Loaderpage from "./Components/Loaderpage"
import { useState, useCallback} from 'react'


function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => {setLoading(false);},[]);

  if (loading) {
    return (
      <Loaderpage
        onComplete={handleLoaderComplete}
      />
    );
  }


    

  
 
 

  return (

   
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Pricing"  element={<Pricing/>}/>
          <Route path="/About" element={<About />}/>
          
         
          
       </Route>
      </Routes>

    </BrowserRouter>

      
      
    
  )
}

export default App
