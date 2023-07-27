import {useState, useEffect} from 'react'
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'


export default function Movies() {
  const [movies, setMovies] = useState([])
  const {search} = useParams()
  const navigate = useNavigate()
  const movieListEl = document.querySelector('.movie__list')

  async function fetchMovies(){
    const {data} = await axios.get(`https://www.omdbapi.com/?apikey=49913df9&s=${search}`)
    setMovies(data.Search)
  }

  useEffect(() => {
    fetchMovies()
  },[])

  function movieHTML(movie) {
    return (
      <div className="movie" key={movie.imdbID} onClick={() => navigate(`${movie.imdbID}`)}>
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
      const filteredList = movies.sort((a, b) => {
        if (a.Year > b.Year) return 1;
        if (b.Year > a.Year) return -1;
        return 0;
      });

      if (filter === "Old to New") {
        setMovies(filteredList);
      } else {
        setMovies(filteredList.reverse());
      }

      console.log(movies)
    }
  }

  function filterMovie(event) {
    let filter = event.target.value;

    moviesFilter(filter);
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
              onChange={(event) => filterMovie(event)}
            >
              <option value disabled>
                Sort by..
              </option>
              <option value="Old to New">Old to New</option>
              <option value="New to Old">New to Old</option>
            </select>
          </div>
          <div className="movie__list">
            {movies.map((movie) => movieHTML(movie))}
          </div>
        </div>
      </div>
    </section>
  );
}