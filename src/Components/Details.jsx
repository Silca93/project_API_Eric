import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'

export default function Details() {
  const {country, back, text, setText, searchVal, setSearchVal, tasksSearch, setTasksSearch} = useContext(Context);
  
  const {id=0} = useParams();
  const countryId = country[id];
  //  console.log(countryId.region);

  return (
    <>
      {/* {country.map((element, index) => { */}
        {/* return ( */}
         
      <div 
      // key={index} 
      className="w-dvw flex flex-col">
       
          <div className="flex">

            <div className="left w-1/2 h-dvh flex flex-col items-center justify-center relative">
              <div className="w-[7rem] h-[2rem] flex gap-4 bg-white border-2 shadow-xl absolute left-[80px] top-12 justify-center items-center">
                 <img src={back} alt=""  width="15px"/> 
       
                  <Link to="/project_API_Eric"><button>BACK</button></Link> 
              </div>
              
              {/* {flagId.name.common} */}
               
              <img 
              // index={index} 
              src={countryId.flags.png} alt=""width="600px"/>
            </div>
            <div className="right w-1/2 h-dvh flex justify-start items-center">
              <div className="flex gap-2 w-full justify-between">
                <div className="left flex-flex-col gap-2">
                  {/* <h1 className="text-xl font-bold mb-9" key={index}>{element.name.common}</h1> */}
                  <p className="font-medium">Native Name:&nbsp; {Object.values(countryId.name.nativeName)[0].official} </p>
                  <p className="font-medium">Population:&nbsp; {countryId.population}</p>
                  <p className="font-medium">Region:&nbsp; {countryId.region}</p>
                  <p className="font-medium">Sub Region:&nbsp;{countryId.subregion} </p>
                  <p className="font-medium">Capital:&nbsp;{countryId.capital} </p>
                    <p className="font-medium pt-[5rem]">Border Countries:&nbsp;{Object.values(countryId.borders).join(', ')}
                     {/* {countryId.borders.map((border, index) => (
                      <span key={index} className="font-medium px-2">{border}</span>
                    ))} */}
                    </p>
                    
                </div>
                <div className="right flex flex-col gap-2 mt-9 pr-[200px]">
                  <p className="font-medium">Top level Domain:&nbsp; {countryId.tld}</p>
                  <p className="font-medium">Currencies:&nbsp;{Object.values(countryId.currencies)[0].name}</p>
                  <p className="font-medium">Languages:&nbsp;{Object.values(countryId.languages)[0]}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
            
          {/* ) */}
        {/* })} */}
    </>
    
  )
}
