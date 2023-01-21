import React,{ useEffect, useState } from 'react'
import './Style.css';
const Weather = () => {
  const [city, setcity] = useState(null)
  const [search, setsearch] = useState("Mumbai")
  useEffect(() => {
    const fetchApi = async()=>{
      const url =  `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b9691490c22dc07cbd369ebb0515841e`
      const response = await fetch (url);
      const resJson = await response.json();
      setcity(resJson.main)
    }
    
      fetchApi()
    } , [search])
  
  return (
    <>
       
    <div className="box">
      
   <div className="container">
    <div className="inputData">
      <input type="search" onChange={(event) =>{
  setsearch(event.target.value)
      }}/>
    </div>
    {
      !city ?(
        <p>Not Data found</p>
      ) : (
        <div>
             <div className="info">
      <h2 className='location'>
      <i class="fa-solid fa-street-view"></i>{search}
      {/* <i class="fa-regular fa-street-view"></i> */}
      </h2>
      <h1 className="temp">{city.temp}°Cel</h1>
      <h3 className="tempin-max"> Min :{city.temp_min}° Cel | Max : {city.temp_max}° Cel</h3>
    </div>
        </div>
      )
      }
 
   </div>
   </div>
   
    </>
  )
}

export default Weather
