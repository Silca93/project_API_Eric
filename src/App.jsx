  import { useState, useRef, useEffect } from 'react'
  import React from 'react'

  import Card from './Components/Card'
  import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements, Link, useRouteError } from "react-router-dom"

  import Home from './Home'
  import Details from './Components/Details'
  import './App.css'
  //?images//
  import search from './assets/logos/search-solid.svg'
  import back from './assets/logos/arrow-left-solid.svg'
  import moon from './assets/logos/moon-regular.svg'


  export const Context = React.createContext()

  function App() {

    const [country, setCountry] = useState([]);

    const [text, setText] = useState(country);
    const [searchVal, setSearchVal] = useState("");
    const [tasksSearch, setTasksSearch] = useState(text); 
    

  // useEffect(() => {
  //   setTasksSearch(
  //     country.filter((country) =>
  //       country.toLowerCase().includes(searchVal.toLowerCase())
  //     )
  //   );
  // }, [searchVal]); 
  const filteredCountries = country.filter(country =>
    country.name.common.toLowerCase().includes(searchVal.toLowerCase())
);

    const Error = () => {
      return <h1>404 Not Found</h1>
    }

    const BASE_URL = ('https://restcountries.com/v3.1/all')
    
 


    const router = createBrowserRouter([
      {
        path:"/",
        element: <Home/>,
        errorElement: Error(),
        // children: [
        //   {
        //     path: "/Home/:id",
        //     element: <Details/>,
        //     errorElement: Error()
        //   }
        // ]
          
        
      },
      {
        path: "/Details/:id",
        element: <Details/>,
        errorElement: Error()
      }
    ])

    return (
      <Context.Provider value={{country, setCountry, search, back, moon, text, setText, searchVal, setSearchVal, tasksSearch, setTasksSearch, filteredCountries}}>

        <div className="main w-dvw h-dvh bg-[hsl(0, 0%, 100%)]">
          <RouterProvider router = {router}/>
                  
        </div>
      </Context.Provider>
    )
  }

  export default App
