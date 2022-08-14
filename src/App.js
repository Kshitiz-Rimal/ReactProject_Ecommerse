import './App.css';

let name="Kshitiz";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic porro deleniti expedita adipisci provident, exercitationem officia dicta culpa non cupiditate ipsa voluptatibus! Architecto eum officia optio debitis doloribus! Dolorum?</p>
      </div>
    </>
  );
}

export default App;
