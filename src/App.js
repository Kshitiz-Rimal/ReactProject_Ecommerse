import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}/>
              
            
            <Route exact path="/" element={<TextArea heading="Enter Text to analyse" mode={mode} />}/>

          </Routes>
        </div>
      </Router>

      {/* Original without route */}
      {/* <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3"></div>
      <TextArea heading="Enter Text to analyse" mode={mode} />
      <About mode={mode} /> */}
    </>
  );
}

export default App;
