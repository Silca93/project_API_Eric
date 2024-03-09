import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Card from './Components/Card'
import Details from './Components/Details'


import { Context } from './App'
import { useContext } from 'react'

import { useEffect } from 'react'

export default function Home() {

 const {country, setCountry} = useContext(Context)   

 const BASE_URL = ('https://restcountries.com/v3.1/all')


  return (
    <div className="w-dvw">
       
        <Header/>
        <Body/>
        

    </div>
  )
}
