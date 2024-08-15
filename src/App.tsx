import './App.css'
import './style/filmItem.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import FilmsPage from "./components/FilmsPage.tsx"
import IdFilmPage from "./components/IdFilmPage.tsx"
import React from "react"
import LikePage from "./components/LikePage.tsx"





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
          <Route path="films/like" element={<LikePage />} />
          <Route path="films/:id" element={<IdFilmPage />} />
          <Route path="films" element={<Navigate to="page/1" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
