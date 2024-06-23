import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FilmsPage from "./components/FilmsPage.tsx";

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
);
