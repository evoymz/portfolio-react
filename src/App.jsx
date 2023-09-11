import { useState } from 'react'

import './App.css'
import { Navbar } from './componentes/sections/Navbar'
import { Presentation } from './componentes/sections/Presentation'
import { Skills } from './componentes/sections/Skills'
import { Projects } from './componentes/sections/Projects'
import { Footer } from './componentes/sections/Footer'
import { ButtonA } from './componentes/elements/ButtonA'


function App() {
  return (

  <div>
    <Navbar/>
    <Presentation/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>
  
  )
}

export default App
