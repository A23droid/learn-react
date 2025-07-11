import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null); // defualt val

  const passwordGenerator = useCallback(function(){
    let pass = "";
    let str = "ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*-=_+";

    for (let i = 1; i <= length; i++) {
        let charInd = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(charInd);
    }

    setPassword(pass);

  }, [length, numberAllowed, charactersAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 99); // Alternate  
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-[#FAB387] bg-white-300'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>     

    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 bg-white'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />

      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 px -3 py-0.5 shrink-0 text-white'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min = {6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
        <input 
        type="checkbox"
        defaultChecked = {charactersAllowed}
        id='characterInput'
        onChange={() => {
          setCharactersAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
