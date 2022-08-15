import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="container ">
        <TextArea heading="Enter Text to analyse" />
        <About/>
      </div>
    </>
  );
}

export default App;
