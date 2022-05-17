import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter+1);
  }

  return (
    <div className="App">
      <h2>Fizz Buzz</h2>
        <button onClick={incrementCounter}>Click me!</button>
        <div className="message">{counter}</div>
    </div>
  );
}

export default App;
