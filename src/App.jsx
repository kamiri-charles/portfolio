import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";
import "boxicons/css/boxicons.min.css";
import "./App.scss";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/certification" element={<Certification />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/email-submission-success" element={<Thanks />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
