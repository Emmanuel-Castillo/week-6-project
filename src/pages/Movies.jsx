import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import img__skeleton from '../assets/skeleton__img--template.jpg'

export default function Movies({setNotFound}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1)
  const { search } = useParams();
  const navigate = useNavigate();

  // TODO: Fix API KEY
  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=49913df9&s=${search}`
    );
    
    if(data.Error) {
      navigate("/")
      setNotFound(true)
    }
    else{
      setMovies(data.Search);
      setLoading(false);

    }
  }

  async function changePage(){
    setLoading(true)
    const {data} = await axios.get(`http://www.omdbapi.com/?apikey=49913df9&s=${search}&page=${page}`)
    setMovies(data.Search)
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchMovies();
    }, 100);
  }, []);

  useEffect(() => {
    changePage()
  }, [page])

  function movieHTML(movie) {
    return (
      <div
        className="movie"
        key={movie.imdbID}
        onClick={() => navigate(`${movie.imdbID}`)}
      >
        <div className="movie__img--wrapper">
          <img
            src={movie.Poster}
            alt="Movie Poster Not Available!"
            className="movie__img"
          />
        </div>
        <div className="movie__description">
          <p className="movie__title"> {movie.Title} </p>
          <p className="movie__year"> {movie.Year} </p>
        </div>
      </div>
    );
  }

  function moviesFilter(filter) {
    if (filter) {
      const sortedMovies = [...movies].sort((a, b) => {
        if (filter === "Old to New") {
          return a.Year - b.Year;
        } else if (filter === "New to Old") {
          return b.Year - a.Year;
        }
        return 0;
      });
  
      setMovies(sortedMovies);
    }
  }
  

  function renderSkeleton(index) {
    return (
      <div className="movie__skeleton" key={index}>
        <div className="movie__wrapper--skeleton">
        <img
            src={img__skeleton}
            alt="Movie Poster Not Available!"
            className="movie__img--skeleton"
          />
        </div>
        <div className="movie__description--skeleton">
          <p className="movie__title--skeleton">aaaaaaaa</p>
          <p className="movie__year--skeleton">2001</p>
        </div>
      </div>
    );
  }

  return (
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="content__header">
            <h2 className="header__title results__header">Results: </h2>
            <select
              className="filter__movie"
              id="filter"
              onChange={(event) => moviesFilter(event.target.value)}
            >
              <option value disabled>
                Sort by..
              </option>
              <option value="Old to New">Old to New</option>
              <option value="New to Old">New to Old</option>
            </select>
          </div>
          <div className="movie__list">
            {loading
              ? new Array(10).fill(0).map((_,index) => renderSkeleton(index))
              : movies.map((movie) => movieHTML(movie))}
          </div>
          
          <div className="counter">
            <button className="minus" onClick={() => {
              setPage(prevPage => {
                if(prevPage === 1) return 1;
                return prevPage - 1})
            }}>-</button>
            <p className="pageNumber">{page}</p>
            <button className="plus" onClick={() => {
              setPage(prevPage => 
                {if(prevPage === 100) return 100;
                return prevPage + 1})
            }}>+</button>
          </div>
        </div>
      </div>
    </section>
  );
}
