import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home({notFound, setNotFound}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  function loadNextPage(event) {
    event.preventDefault()
    setNotFound(false)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate(`${event.target[0].value}`);
    }, 1000);
  }

  return (
    <>
      <header>
        <h1 className="header__title">Browse our Movies!</h1>
        <form
          action=""
          className="input__wrapper"
          onSubmit={(event) => loadNextPage(event)}
        >
          <input
            type="text"
            className="search__input"
            placeholder="Enter keyword or name"
          ></input>
          <button className="search__input--wrapper">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </header>
      <div className="body">
        {loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" />: <></>}
        {notFound ? 
        <h1 className="not--found">Not Found...</h1>
         : <></>}
      </div>
    </>
  );
}
