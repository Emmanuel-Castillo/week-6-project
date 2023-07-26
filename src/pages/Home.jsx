import React, { useEffect, useState } from "react";
import Header  from "../components/Header";
import axios from "axios";

export default function Home() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchMovies(search){
    const {data} = await axios.get(`https://www.omdbapi.com/?apikey=49913df9&s=${search}`)
    setMovies(data)
  }

  useEffect(() => {
    fetchMovies()
  },[])

  return (
    <div>
      <Header fetchMovies={fetchMovies}/>
    </div>
  );
}
