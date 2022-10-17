import "./styles.css";
import "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Series from "./routes/Series";
import Character from "./routes/Character.js";
import Questions from "./routes/Questions.js";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="series/detail/:id" element={<Detail />} />
          <Route path="/character" element={<Character />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//The Movie DB API session ID
// 1d5a402b326106273903546dacb8c186171ae50c
