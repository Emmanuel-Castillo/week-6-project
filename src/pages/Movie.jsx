import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const { search, id } = useParams();

  async function fetchMovie() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=49913df9&i=${id}`
    );
    console.log(data);
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie__info--page">
      <div className="movie__info--container">
        <figure className="movie__poster--wrapper">
          {/* <Image src={movie.Poster} className="movie__poster--img"/> */}
          <img src={movie.Poster} alt="" className="movie__poster--img" />
        </figure>
        <div className="movie__info--description">
          <h1 className="movie__info--title">
            <Link to={`/${search}`}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            </Link>{" "}
            {movie.Title}
          </h1>
          <p className="movie__info--para">
            <span className="darkgold">Summary:</span> {movie.Plot}
          </p>
          <p className="movie__info--para">
            <span className="darkgold">Genre:</span> {movie.Genre}
          </p>
          <p className="movie__info--para">
            <span className="darkgold">Released:</span> {movie.Released}
          </p>
          <p className="movie__info--para">
            <span className="darkgold">Director:</span> {movie.Director}
          </p>
          <p className="movie__info--para">
            <span className="darkgold">Actors:</span> {movie.Actors}
          </p>
        </div>
      </div>
    </div>
  );
}
