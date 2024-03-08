import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'

import Card from './Card'

export default function Body() {
    const {search, text, setText, searchVal, setSearchVal, tasksSearch, setTasksSearch} = useContext(Context)
  return (
    <div className="w-100dvw bg-gray-100 pt-[50px]">
        <div className="select flex justify-between pb-[50px]">

            <div className="w-[35rem] h-[4rem] bg-white flex items-center gap-4 pl-5 ml-[6rem]  border-black shadow-lg">
                <img src={search} alt="" width="20px"/>
                <input className="h-full w-full" onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder='Search a country' />
            </div>
            <div className="w-[10rem] h-[4rem] bg-white pr-5 flex justify-center items-center shadow-lg mr-[6rem]">
            {/* <details className="dropdown"> */}
                <div className="">Filter by region</div>
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
