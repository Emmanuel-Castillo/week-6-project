import React from 'react'

export default function MoviesResults() {
  return (
    <section id="content">
    <div class="container">
      <div class="row">
        <div class="content__header">
          <h2 class="header__title results__header">Results: </h2>
          <select class="filter__movie" id="filter" onchange="filterMovie(event)">
            <option value disabled selected>Sort by..</option>
            <option value="Old to New">Old to New</option>
            <option value="New to Old">New to Old</option>
          </select>
        </div>
        <div class="movie__list">
        </div>
      </div>
    </div>
  </section>
  )
}
