import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from './pages/Home'
import  MoviesResults  from "./pages/MoviesResults";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<MoviesResults/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
