import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState ("");
  const [count, setCount] = useState(0)

  return (
   <div classname = "app-container">
    <h1>React Study App</h1>

 {/* Input Example */}

    <div>
      className = "card"
      <h2>user Input</h2>
      <input 
      type = "text"
      placeholder = "Enter Your Name"
      value = {name}
      onChange = {(e) => setName (e.target.value)}
      ></input>
     <p>
      Hello, {name || "Student"}
     </p>
    </div>

 {/* Counter Example */}
    <div className = "card">
      <h2>Counter</h2>
      <p>Current Count: {count} </p>
      <button onClick ={() => setCount(count +1)}>Increase</button>
      <button onClick ={() => setCount(count -1)}>Decrease</button>
      <button onClick ={() => setCount(0)}>rese</button>
    </div>
{/* Dynamic List Example */}
    <div>className = "card"
      <h2> Simple List </h2> 
      <ul> 
      {["HTML", "CSS" , "JAVASCRIPT" , "REACT"].map ((item, index) => (
        <li key = {index}>{item} </li>
      ))}
      </ul>
   </div>
   </div>
  )
}

export default App
