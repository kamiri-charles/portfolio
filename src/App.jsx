import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Thanks from './components/Thanks';

import './App.scss';

const App = () => {
  return (
    <>
      <Canvas />
      <Router>
        <Routes>
          <Route exact path='/portfolio' element={ <Home /> } />
          <Route exact path='/portfolio/home' element={ <Home /> } />
          <Route exact path='/portfolio/projects' element={ <Projects /> } />
          <Route exact path='/portfolio/certification' element={ <Certification /> } />
          <Route exact path='/portfolio/contact' element={ <Contact /> } />
          <Route exact path='/portfolio/email-submission-success' element={ <Thanks />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
