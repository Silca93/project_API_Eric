import React from 'react'
import { Context } from '../App'
import { useContext } from 'react'


export default function Header() {
  const {moon} = useContext(Context)
   
  return (
    <div className="w-dvw h-[7rem]  flex justify-between items-center px-5 shadow-lg border-black">
        <h1 className="text-[2rem] font-bold pl-[5rem]">Where in the world ?</h1>
        <div className="flex gap-2">
            <img src={moon} alt="" width="20px" />
            <h1 className="text-[1.2rem] pr-[5rem] font-medium">Dark Mode</h1>
        </div>

    </div>
  )
}
