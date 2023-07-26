import React from 'react'

export default function Header({fetchMovies}) {
  return (
    <header>
      <h1 class="header__title">Browse our Movies!</h1>
      <form action="" class="input__wrapper" onsubmit={(event) => fetchMovies(event)}>
        <input type="text" class="search__input" placeholder="Enter keyword or name">
        </input>
        <button class="search__input--wrapper">
          <i class="fa-solid fa-magnifying-glass cursor"></i>
        </button>
      </form>
    </header>
  )
}

  

