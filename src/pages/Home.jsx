import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {
  const navigate = useNavigate()
  // const loadingSpinner = document.querySelector(".fa-spinner")

  // function loadNextPage(event) {
  //   setTimeout(() => {
  //     // loadingSpinner.
  //     navigate( `${event.target[0].value}`)
  //   }, 500)
  // }
 
  return (
    <>
    <header>
      <h1 className="header__title">Browse our Movies!</h1>
      <form action="" className="input__wrapper" onSubmit={(event) =>navigate( `${event.target[0].value}`)}>
        <input type="text" className="search__input" placeholder="Enter keyword or name">
        </input>
        <button className="search__input--wrapper">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </header>
    <body className="body">
    <FontAwesomeIcon icon="fa-solid fa-spinner" />
    </body>
    </>
  );
}
