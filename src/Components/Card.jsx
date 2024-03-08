import React from 'react'
import { createContext } from 'react'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Card() {

  const {country, setCountry, text, setText, searchVal, setSearchVal, tasksSearch, setTasksSearch, filteredCountries } = useContext(Context)
  const {id=0} = useParams();
  const flagId = country[id]

  
  const BASE_URL = ('https://restcountries.com/v3.1/all')

  useEffect(() => {

    const fetchData = async () => {
       try {
         const response = await fetch(BASE_URL);
         const json = await response.json();
         setCountry(json)
       }catch (error) {
           console.error('Error catching data', error)
       }
   
    };
    fetchData();
}, [] )
 
  return (
    <>
        {filteredCountries.map((element, index ) => {
            return (
              <Link index={index} to={`/Details/${index}`}>
              <div className="w-[24rem] h-[30rem] bg-white flex flex-col">
                <div className="flag w-full h-[45%]  overflow-hidden flex justify-center items-center">
                    <img src={element.flags.png} alt="" height="100%" width="100%"/>
                </div>
                
                <div className="info w-full h-[55%] pt-5 pl-4">
                    <h1 index={index} className="pt-4 text-[1.3rem] font-bold">{element.name.common}</h1>
                    {/* <Link to={`/${index}`}><p><strong>Population:</strong>&nbsp;{element.population}</p></Link> */}
                    <p><strong>Population:</strong>&nbsp;{element.population}</p>
                    <p><strong>Region:</strong>&nbsp;{element.region}</p>
                    <p><strong>Capital:</strong>&nbsp;{element.capital}</p>
                 </div>
              </div>
            </Link>
            )
        })}
 
    </>

  )
}
