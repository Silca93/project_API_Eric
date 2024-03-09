import React from 'react'
import { Context } from '../App'
import { useContext } from 'react'


export default function Header() {
  const {moon, switchMode, mode} = useContext(Context)
   
  return (
    <div className={!mode ? "w-dvw h-[7rem] bg-white flex justify-between items-center px-5 shadow-lg border-black" : "w-dvw h-[7rem] bg-[#2b3642] flex justify-between text-white items-center px-5 shadow-lg border-black"}>
        <h1 className="text-[2rem] font-bold pl-[5rem]  max-[970px]:text-[1.5rem]">Where in the world ?</h1>
        <div className="flex gap-2">
            <img src={moon} alt="" width="20px" />
            <button onClick={() => switchMode()} className="text-[1.2rem] pr-[5rem] font-medium max-[970px]:text-[0.8rem]">Dark Mode</button>
        </div>

    </div>
  )
}
