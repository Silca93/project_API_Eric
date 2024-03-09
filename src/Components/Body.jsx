import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'

import Card from './Card'

export default function Body() {
    const {search, country, text, setText, searchVal, setSearchVal, mode, switchMode, asianCountryNames} = useContext(Context)
  return (
    <div className={!mode ? "w-100dvw bg-gray-100 pt-[50px]" : "bg-[#202d36] w-100dvw pt-[50px]"}>
        <div className="select flex justify-between pb-[50px]">

            <div className={!mode? "w-[35rem] h-[4rem] bg-white flex items-center gap-4 pl-5 ml-[6rem]  border-black shadow-lg" : "w-[35rem] h-[4rem] bg-[#2b3642] flex items-center gap-4 pl-5 ml-[6rem] border-black shadow-lg"}>
                <img src={search} alt="" width="20px"/>
                <input className= {!mode ? " bg-white h-full w-full" :  "h-full w-full bg-[#2b3642] text-white"} onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder='Search a country' />
            </div>
            <div className={!mode? "w-[10rem] h-[4rem] bg-white pr-5 flex justify-center items-center shadow-lg mr-[6rem]" : "w-[10rem] h-[4rem] bg-[#2b3642] text-white pr-5 flex justify-center items-center shadow-lg mr-[6rem]"}>
            {/* <details className="dropdown"> */}
                <button onClick={() => asianCountryNames()} className="text-center">Filter by region</button>
                {/* <ul className="p-2 dropdown-content bg-white  ">
                    <li><a>Africa</a></li>
                    <li><a>America</a></li>
                    <li><a>Asia</a></li>
                    <li><a>Europe</a></li>
                    <li><a>Oceania</a></li>
                </ul>
            </details> */}
                
            </div>
        </div>
        <div className="cards flex gap-[100px] mx-5 my-5 justify-center flex-wrap ">
            <Card/>
        </div>
    </div>
  )
}
