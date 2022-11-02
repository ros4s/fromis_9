import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Album from "./pages/Album";
import Music from "./pages/Music";
import Video from "./pages/Video";
import Goods from "./pages/Goods";
import SNS from "./pages/SNS";
import logo from "./logo.png";

function App() {
  return (
    <Router>
      <header className="title">
        <img src={logo} alt="logo" width={50} height={50} />
        <div> from + idol + school = fromis </div>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/photo">Photo</Link>
        <Link to="/album">Album</Link>
        <Link to="/music">Music</Link>
        <Link to="/video">Video</Link>
        <Link to="/goods">Goods</Link>
        <Link to="/sns">SNS</Link>
        <div id="indicator"></div>
      </nav>
      <div className="description">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/album" element={<Album />} />
          <Route path="/music" element={<Music />} />
          <Route path="/video" element={<Video />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/sns" element={<SNS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
