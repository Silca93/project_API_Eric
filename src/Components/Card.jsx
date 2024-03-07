import React from 'react'
import { createContext } from 'react'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../App'

export default function Card() {

  const {country, setCountry } = useContext(Context)

  
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
}, )


  console.log(country);
  return (
    <>
        {country.map((element, index, ) => {
            return (
                <div className="w-[20rem] h-[25rem] bg-yellow-400 flex flex-col">
                <div className="flag w-full h-[45%] bg-red-400">
                    <img src={element.flags.png} alt="" />
                </div>
                <div className="info w-full h-[55%] pt-5 pl-4">
                    <h1>{element.name.common}</h1>
                    <p>{element.population}</p>
                    <p>{element.region}</p>
                    <p>{element.capital}</p>
                </div>
        
            </div>
            )
        })}
 
    </>

  )
}
