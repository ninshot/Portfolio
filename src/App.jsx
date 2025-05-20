/**
 * The main entry point for the 3D portfolio application.
 * This component renders the main application layout and structure.
 * 
 */

import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
