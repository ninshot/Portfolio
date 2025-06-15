/**
 * The main entry point for the 3D portfolio application.
 * This component renders the main application layout and structure.
 * 
 */

import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Hero, Navbar, Tech, Works} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary caret-transparent select-none">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
