import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar />
      <div className="container ">
        <TextArea heading="Enter Text to analyse" />
      </div>
    </>
  );
}

export default App;
