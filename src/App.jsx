import React, { useState } from "react";

const App = () => {
  const [value,setvalue] = useState('');
  return(
   <div className="border-2 border-rose-600 h-full size-60  rounded-lg w-full max-w-80">
        <form action="">
          <input type="text" value={value} className="border-none rounded-lg text-3xl bg-red-300 text-end basis-1 h-16 w-full"/>
          <div className="size-half flex space-x-2 mt-2 mb-2 ">
              <input className="bg-gray-400 ml-2 hover:bg-gray-700 h-12  min-w-16 drop-shadow-md  " type="button" value="AC" onClick={e => setvalue('')}/>
              <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md   min-w-16" type="button" value="%" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700   drop-shadow-md  min-w-16" type="button" value="C" onClick={e => setvalue(value.slice(0,-1))}/>
               <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md min-w-20" type="button" value="/" onClick={e => setvalue(value + e.target.value)}/>
          </div>
          <div className="size-half flex space-x-2 mt-2 mb-2 ">
              <input className="bg-gray-400 ml-2 hover:bg-gray-700  h-12 min-w-16 drop-shadow-md  " type="button" value="7" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md   min-w-16" type="button" value="8" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700   drop-shadow-md  min-w-16" type="button" value="9" onClick={e => setvalue(value + e.target.value)}/>
               <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md min-w-20" type="button" value="*" onClick={e => setvalue(value + e.target.value)}/>
          </div>
          <div className="size-half flex space-x-2 mt-2 mb-2 ">
              <input className="bg-gray-400 ml-2 hover:bg-gray-700  h-12 min-w-16 drop-shadow-md  " type="button" value="4" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md   min-w-16" type="button" value="5" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700   drop-shadow-md  min-w-16" type="button" value="6" onClick={e => setvalue(value + e.target.value)}/>
               <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md min-w-20" type="button" value="-" onClick={e => setvalue(value + e.target.value)}/>
          </div>
          <div className="size-half flex space-x-2 mt-2 mb-2 ">
              <input className="bg-gray-400 ml-2 hover:bg-gray-700 h-12   min-w-16 drop-shadow-md  " type="button" value="1" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md   min-w-16" type="button" value="2" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700   drop-shadow-md  min-w-16" type="button" value="3" onClick={e => setvalue(value + e.target.value)}/>
               <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md min-w-20" type="button" value="+" onClick={e => setvalue(value + e.target.value)}/>
          </div>
          <div className="size-half flex space-x-2 mt-2 mb-2 ">
              <input className="bg-gray-400 ml-2 hover:bg-gray-700  h-12  min-w-16 drop-shadow-md  " type="button" value="0" onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700  drop-shadow-md   min-w-16" type="button" value="." onClick={e => setvalue(value + e.target.value)}/>
              <input className="bg-gray-400 hover:bg-gray-700   drop-shadow-md  min-w-40" type="button" value="=" onClick={e => setvalue(eval(value))}/>
               
          </div>
          
          
          
          
        </form>
   </div>
  )
}

export default App
