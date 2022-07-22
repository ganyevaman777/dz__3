import './App.css';
import Green from "./Components/Green";
import Blue from "./Pages/Blue";


function App() {

    const mass = ["Dastan", "Ali", "Amir"];

  return (
    <div className="container">
        <Green name={mass}/>

        ---------------------

        <Blue name={mass}/>
    </div>
  );
}

export default App;
