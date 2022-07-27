import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <>
      <Canvas />
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/home' element={ <Home /> } />
          <Route exact path='/skills' element={ <Skills /> } />
          <Route exact path='/projects' element={ <Projects /> } />
          <Route exact path='/certification' element={ <Certification /> } />
          <Route exact path='/contact' element={ <Contact /> } />
        </Routes>
        <Navbar />
        
      </Router>

    </>
  );
}

export default App;
