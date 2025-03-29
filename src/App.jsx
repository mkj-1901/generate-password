import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import Footer from './Footer.jsx';

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (characters) str += "@#$%^&*!|?"
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, numbers, characters, setPassword])

  useEffect(() => { passwordGenerator() }, [length, numbers, characters, passwordGenerator])

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password] )
  
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-start items-center">
      <h1 className="text-5xl mt-8">Password Generator</h1> <br /><br />
      <div className='bg-gray-800 text-center flex rounded-xl mx-4 my-2'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
        <button className='outline-none px-3 bg-blue-700 rounded-r-xl shadow-md transition transform active:scale-95 hover:bg-blue-600' onClick={copyToClipboard}>Copy</button>
      </div> <br />
      <div className='flex text-sm gap-x-2 bg-gray-800 rounded px-5 py-4'>
        <div className='flex items-center gap-x-1 px-3'>
          <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          <label>Length :{length} </label>
        </div>
        <div className='flex items-center gap-x-1 px-3'>
          <input type="checkbox" defaultChecked={numbers} id='numberInput' onChange={() => { setNumbers((prev) => !prev) }} />
          <label htmlFor='numberInput'>Numbers Allowed</label>
        </div>
        <div className='flex items-center gap-x-1 px-3'>
          <input type="checkbox" defaultChecked={characters} id='charInput' onChange={() => { setCharacters((prev) => !prev) }} />
          <label htmlFor='charInput'>Special Characters Allowed</label>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default App
