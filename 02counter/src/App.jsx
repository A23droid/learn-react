import { useState } from 'react' // hooks come from here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5) // Hook to propagate changes to UI

  // Conventionally, val is 'value' and method is 'setValue', but
  // you're free to change the names

  // useState returns an array: a value (init. 5 here), and a method, thus it
  // is the responsibility of react to update 'counter' wherever
  // it is found, thus saving us from the task of manipulating
  // various DOM elements   

  const increaseValue = () => {
    if (counter === 20) return;
    setCounter(counter + 1); // setCounter(A) => counter = A

    // upon Calling (which indicates a change in state), 
    // react analyses our DOM and checks where have
    // we used the counter variable, and hence changes it.
  }

  const decreaseValue = function() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }
  
  
  return (
    <>
      <h1>AP</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
        onClick={increaseValue}
      >Increase Value {counter}</button>
      <br />
      <button
        onClick={decreaseValue}
      >Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
