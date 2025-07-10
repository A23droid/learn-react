import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive ")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      {/* onClick expects a function so we can only pass a ference, the issue being
      the inability to pass parameters in it, hence we can use a callback function
      in the onClick to bypass this issue. */}
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "red"}}>Red</button> 
        <button
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "green"}}>Green</button>
        <button 
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "Blue"}}>Blue</button>
        <button 
        onClick={() => setColor("purple")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "purple"}}>Purple</button>
        <button
        onClick={() => setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor: "Black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
