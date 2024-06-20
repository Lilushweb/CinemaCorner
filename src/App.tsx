
import './App.css'
import {filmsApi} from "./services/PostService.ts";
import FilmsContainer from "./components/FilmsContainer.tsx";
import './style/filmItem.css'




function App() {

  return (
    <div className="App">
        <FilmsContainer/>
    </div>
  )
}

export default App
