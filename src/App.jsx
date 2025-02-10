import { useState } from 'react'

function App() {
  const [num, setnum] = useState('')
  return (
    <div className='flex justify-center'>
      <div className='flex flex-wrap justify-evenly m-20 w-75 gap-y-2 bg-gray-700 p-5 rounded-xl  '>
        <h1 className='bg-blue-100 mb-6 rounded-md font-semibold w-72 text-xl  h-20'>{num}</h1>
        <button onClick={()=>setnum((prevnum)=>prevnum+'7')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>7</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'8')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>8</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'9')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>9</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'+')} className='bg-blue-400  text-xl rounded-2xl w-14 h-14 shadow-xl hover:bg-blue-300 hover:translate-y-0.5'>+</button> 
        <button onClick={()=>setnum((prevnum)=>prevnum+'4')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>4</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'5')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>5</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'6')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>6</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'-')} className='bg-blue-400  text-xl rounded-2xl w-14 h-14 shadow-xl hover:bg-blue-300 hover:translate-y-0.5'>-</button> 
        <button onClick={()=>setnum((prevnum)=>prevnum+'1')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>1</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'2')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>2</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'3')} className='bg-amber-400 text-xl rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>4</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'*')} className='bg-blue-400  text-xl rounded-2xl w-14 h-14 shadow-xl hover:bg-blue-300 hover:translate-y-0.5'>*</button> 
        <button onClick={()=>setnum((prevnum)=>'')} className='bg-gray-600 text-white rounded-2xl  text-xl w-14 h-14 shadow-xl hover:bg-gray-500 hover:translate-y-0.5'>C</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'0')} className='bg-amber-400 text-xl   rounded-2xl w-14 h-14 shadow-xl  hover:bg-yellow-300 hover:outline-white hover:outline-2 hover:translate-y-0.5'>0</button>
        <button onClick={()=>setnum((prevnum)=>eval(prevnum))} className=' bg-gray-600 text-white text-2xl rounded-2xl w-14 h-14 shadow-xl hover:bg-gray-500 hover:translate-y-0.5'>=</button>
        <button onClick={()=>setnum((prevnum)=>prevnum+'/')} className='bg-blue-400    rounded-2xl w-14 h-14 shadow-xl hover:bg-blue-300 hover:translate-y-0.5'>/</button>
      </div>
    </div>
  )
}

export default App
