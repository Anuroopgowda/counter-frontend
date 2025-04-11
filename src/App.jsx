import { useState } from 'react';
import './App.css';

const API_BASE = 'http://localhost:3001'; // use your backend URL later on Render

function App() {
  const [count, setCount] = useState(null);

  const startCounter = async () => {
    await fetch(`${API_BASE}/start`);
  };

  const stopCounter = async () => {
    await fetch(`${API_BASE}/stop`);
  };

  const getCount = async () => {
    const res = await fetch(`${API_BASE}/count`);
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div className="App">
      <h1>Node.js Counter</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
      <button onClick={getCount}>Display Count</button>
      {count !== null && <h2>Count: {count}</h2>}
    </div>
  );
}

export default App;
