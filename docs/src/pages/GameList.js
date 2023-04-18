import Game from "./Game";
import { useEffect, useState } from "react";
import React from "react";

function GameList(){
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null)
  const [show, setShow] = useState(false)
  console.log(country)


    useEffect(()=> {
        //auto-login
        fetch('/countries')
        .then((r)=>{
            r.json().then((countries)=> {
              setCountries(countries)
            })
        });
      },[]); 

    return(
        <div className="game-main">
          <div>
        <p>
          
          {countries.map((country)=>{
          
          return( 
          <button className="country-btn" key={country.id} onClick={(e)=>{
            setCountry(country)
            setShow(true)}}>{country.name}</button>
          )
          })}
          
          </p>
          </div>
          <div className="card">
          {show ? <Game countryObject={country}/> : null}
          </div>
          </div>
        
    )

}
export default GameList;