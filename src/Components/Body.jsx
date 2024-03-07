import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'

import Card from './Card'

export default function Body() {
    const {search} = useContext(Context)
  return (
    <div className="w-100dvw">
        <div className="select flex justify-between">

            <div className="w-[20rem] h-[4rem] bg-white flex items-center gap-4 pl-5 border-2 border-black">
                <img src={search} alt="" width="20px"/>
                <h1>Search a country</h1>
            </div>
            <div className="w-[10rem] h-[4rem] bg-red-200 pr-5 flex justify-center items-center">
                <p>Filter by region</p>
            </div>
        </div>
        <div className="cards flex gap-5 mx-5 my-5 flex-wrap ">
            <Card/>
        </div>
    </div>
  )
}
