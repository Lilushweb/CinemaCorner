import './App.css'
import './style/filmItem.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmsPage from "./components/FilmsPage.tsx";
import IdFilmPage from "./components/IdFilmPage.tsx";
import React from "react";





function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="films/page/1" element={<FilmsPage page={1} />} />
          <Route path="films/page/2" element={<FilmsPage page={2} />} />
          <Route path="films/page/3" element={<FilmsPage page={3} />} />
          <Route path="films/page/4" element={<FilmsPage page={4} />} />
          <Route path="films/page/5" element={<FilmsPage page={5} />} />

          <Route path="films/:id" element={<IdFilmPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
