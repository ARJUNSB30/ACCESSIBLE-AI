import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'

import Footer from './Components/Footer/Footer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        <Title subTitle='Feature-1' title='Image To Verbal Descriptive System'/>
        <Programs/>
        <Title subTitle='Feature-2' title='Voice To Text'/>
        <About />
        <Title subTitle='Feature-3' title='Text-To-Speech'/>
        <Campus/>
        
        
        
        <Footer/>
     </div>
     
    </div>
  )
}

export default App