import './App.css'
import './style/filmItem.css'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import FilmsPage from "./components/FilmsPage.tsx";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="films/page/1" element={<FilmsPage page={1}/>}/>
            <Route path="films/page/2" element={<FilmsPage page={2}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
