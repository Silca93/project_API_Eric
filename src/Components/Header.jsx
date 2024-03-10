import React from 'react'
import { Context } from '../App'
import { useContext } from 'react'


export default function Header() {
  const {moon, switchMode, mode, sun} = useContext(Context)
   
  return (
    <div className={!mode ? "w-dvw h-[7rem] bg-white flex justify-between items-center px-5 shadow-lg border-black" : "w-dvw h-[7rem] bg-[#2b3642] flex justify-between text-white items-center px-5 shadow-lg border-black"}>
        <h1 className="text-[2rem] font-bold pl-[5rem] max-[550px]:pl-2  max-[970px]:text-[1.5rem] max-[670px]:text-[1.2rem]">Where in the world ?</h1>
        <div className="flex gap-2 max-[600px]:flex-col max-[600px]:items-center">
            {
              !mode? <img src={sun} alt="" width="23px" /> 
              :
              <img src={moon} alt="" width="20px" />
              
            }
            
            
            <input  onClick={() => switchMode()} type="checkbox" className="toggle mt-1 mx-1 " uhchecked />
            <button className="text-[1.2rem] pr-[5rem] font-medium max-[970px]:text-[0.8rem] max-[768px]:pr-2">Dark Mode</button>
        </div>

    </div>
  )
}
