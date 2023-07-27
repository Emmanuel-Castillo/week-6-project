import React from 'react'

export default function Movies({movies}) {
  console.log(movies)

  function movieHTML(movie) {
    return (`<div class="movie">
    <div class="movie__img--wrapper">
    <img src="${movie.Poster}"
     alt="Movie Poster Not Available!" class="movie__img">
     </div>
     <div class="movie__description">
     <p class="movie__title"> ${movie.Title} </p>
     <p class="movie__year"> ${movie.Year} </p>
     </div>
  </div>`);
  }

  return (
    <section id="content">
    <div className="container">
      <div className="row">
        <div className="content__header">
          <h2 className="header__title results__header">Results: </h2>
          <select className="filter__movie" id="filter">
            <option value disabled >Sort by..</option>
            <option value="Old to New">Old to New</option>
            <option value="New to Old">New to Old</option>
          </select>
        </div>
        <div className="movie__list">
          {movies.map(movie => movieHTML(movie))}
        </div>
      </div>
    </div>
  </section>
  )
}
