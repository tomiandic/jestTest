import React from 'react';
import './App.css';


function App() {
  const [count, setCount] = React.useState(0);
  const [showErr, setErr] = React.useState(false);

  const decrement = () => {
    count?setCount(count - 1):setErr(true);
  }
  const increment = () => {
    setCount(count + 1);
    setErr(false);;
  }
  
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently
        <span data-test="count">
          {count}
        </span>
      </h1>     
      
      <button onClick={increment} data-test="increment-button">Increment</button>
      <button onClick={decrement} data-text="decrement-button">Decrement</button>

      {showErr&&
      <div style={{color:"red", border:"1px solid red", padding:20}}>Cannot decrement 0</div>
      }
    </div>
  );
}
export default App;
