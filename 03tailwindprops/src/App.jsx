import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "AP",
    price: 123,
    isLoggedIn: true
  }

  let newArr = [12, 23, 34];
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card username = "aditya" btnTxt = "Click me" />  {/* Variable injection */}
      <Card myArr = {newArr}  />  {/* Variable injection */}
    </>
  )
}

export default App
