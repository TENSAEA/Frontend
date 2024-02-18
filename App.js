import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [celceius, setCelceius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {count === 0 && <h1>{count} is neutral</h1>}
      {count > 0 && <h1>{count} is positive</h1>}
      {count < 0 && <h1>{count} is negative</h1>}
      {<hr></hr>}
      {<br></br>}
      <input
        type="number"
        value={celceius}
        onChange={(e) => {
          setCelceius(e.target.value);
        }}
      ></input>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => {
          setFahrenheit(e.target.value);
        }}
      ></input>
      {celceius && <h1>{celceius}°C</h1>}
      {fahrenheit && <h1>{fahrenheit}°F</h1>}
    </div>
  );
}

export default App;
