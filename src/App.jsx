import { useState, useRef, useEffect } from 'react'
import React from 'react'

import Card from './Components/Card'
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements, Link, useRouteError } from "react-router-dom"

import Home from './Home'

import './App.css'
//?images//
import search from './assets/logos/search-solid.svg'


export const Context = React.createContext()

function App() {

  const [country, setCountry] = useState([])

  const Error = () => {
    return <h1>404 Not Found</h1>
  }

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




  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>,
      errorElement: Error(),
      children: [
        {
          path: "/:id",
          element: "",
          errorElement: Error()
        }
      ]
    }
  ])

  return (
    <Context.Provider value={{country, setCountry, search}}>

      <div className="main w-dvw h-dvh bg-[hsl(0, 0%, 100%)]">
        <RouterProvider router = {router}/>
                
      </div>
    </Context.Provider>
  )
}

export default App
