import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  return (
    <>
    <div className="w-full h-screen bg-slate-500 duration-200 " style={{backgroundColor:color}}>
      <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2  ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl ">
        <button onClick={()=> setColor('red')} className="rounded-2xl   p-1 pr-2 pl-2 focus:outline-none" style={{backgroundColor:"red",WebkitTapHighlightColor: 'transparent'}}>Red</button>
        <button onClick={()=> setColor('yellow')} className="rounded-2xl  p-1 pr-2 pl-2 focus:outline-none" style={{backgroundColor:"yellow",WebkitTapHighlightColor: 'transparent'}}>Yellow</button>
          <button onClick={()=> setColor('green')} className="  p-1 pr-2 pl-2 focus:outline-none rounded-2xl " style={{backgroundColor:"green",WebkitTapHighlightColor: 'transparent'}}>Green</button>
          <button onClick={()=> setColor('white')} className="  p-1 pr-2 pl-2 " style={{backgroundColor:"white" ,WebkitTapHighlightColor: 'transparent'}}>Off</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
