import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Card from './Components/Card'

import { Context } from './App'
import { useContext } from 'react'

import { useEffect } from 'react'

export default function Home() {

 const {country, setCountry} = useContext(Context)   

 const BASE_URL = ('https://restcountries.com/v3.1/all')

//  useEffect(() => {

//      const fetchData = async () => {
//         try {
//           const response = await fetch(BASE_URL);
//           const json = await response.json();
//           setCountry(json)
//         }catch (error) {
//             console.error('Error catching data', error)

//         }
    
//      };
//      fetchData();
//  }, )

//  console.log(country);
  return (
    <div className="w-dvw">
        {/* {country.map((element, index) => {
            return (
                <div className="flex">{element.name.common}{element.flags.png} </div>
            )
        })} */}
        <Header/>
        <Body/>


    </div>
  )
}
