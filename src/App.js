import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from './pages/Home'
import Movies  from "./pages/Movies";
import Movie from "./pages/Movie";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path=":search" exact element={<Movies/>}/>
          <Route path=":search/:id" exact element={<Movie/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
