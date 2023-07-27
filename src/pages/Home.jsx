import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home({setMovies}) {
  const [loading, setLoading] = useState()
  const navigate = useNavigate()


  async function fetchMovies(event){
    event.preventDefault()
    const {data} = await axios.get(`https://www.omdbapi.com/?apikey=49913df9&s=${event.target[0].value}`)
    setMovies(data.Search)
    navigate('/movies')
  }

  // useEffect(() => {
    
  //   setLoading(true)
  //   fetchMovies()
  //   setLoading(false)
  // },[])

  return (
    <header>
      <h1 className="header__title">Browse our Movies!</h1>
      <form action="" className="input__wrapper" onSubmit={(event) => fetchMovies(event)}>
        <input type="text" className="search__input" placeholder="Enter keyword or name">
        </input>
        <button className="search__input--wrapper">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </header>
  );
}
