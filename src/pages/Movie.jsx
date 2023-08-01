import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img__skeleton from "../assets/skeleton__img--template.jpg";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState();
  const { search, id } = useParams();

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=49913df9&i=${id}`
    );
    setMovie(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  function renderSkeleton(index) {
    return (
      <>
        <figure className="movie__poster--wrapper movie__poster--page movie__wrapper--skeleton">
          <img
            src={img__skeleton}
            alt=""
            className="movie__poster--img movie__img--page movie__img--skeleton"
          />
        </figure>
        <div className="movie__info--description movie__description--skeleton">
          <p className="movie__title--skeleton">
           Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className="movie__title--skeleton">
           Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className="movie__title--skeleton">
           Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className="movie__title--skeleton">
           Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className="movie__title--skeleton">
           Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
      </>
    );
  }

  function renderMovie(movie) {
    return (
      <>
        <figure className="movie__poster--wrapper movie__poster--page">
          <img
            src={movie.Poster}
            alt=""
            className="movie__poster--img movie__img--page"
          />
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
      </>
    );
  }

  return (
    <div className="movie__info--page">
      <div className="movie__info--container">
        {loading ? renderSkeleton() : renderMovie(movie)}
      </div>
    </div>
  );
}
