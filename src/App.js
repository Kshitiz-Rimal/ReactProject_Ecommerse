import "./App.css";
import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="black"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white"

    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextArea heading="Enter Text to analyse" mode={mode}/>
        <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
