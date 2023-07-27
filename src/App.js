import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from './pages/Home'
import Movies  from "./pages/Movies";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home setMovies={setMovies}/>}/>
          <Route path="/movies" element={<Movies movies={movies}/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
