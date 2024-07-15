import React from 'react';

import '../style/naviget.css'
import { NavLink } from "react-router-dom";

const Naviget = () => {
    return (
        <nav>
            <div className="pageContenirTop">
                <NavLink className="page" to={`/films/page/${1}`}>1</NavLink>
                <NavLink className="page" to={`/films/page/${2}`}>2</NavLink>
                <NavLink className="page" to={`/films/page/${3}`}>3</NavLink>
                <NavLink className="page" to={`/films/page/${4}`}>4</NavLink>
                <NavLink className="page" to={`/films/page/${5}`}>5</NavLink>
            </div>
            <input className="serch" placeholder="Serch film"></input>
            <div className="pageContenirBottom">
                <NavLink className="page" to={`/films/page/${1}`}>1</NavLink>
                <NavLink className="page" to={`/films/page/${2}`}>2</NavLink>
                <NavLink className="page" to={`/films/page/${3}`}>3</NavLink>
                <NavLink className="page" to={`/films/page/${4}`}>4</NavLink>
                <NavLink className="page" to={`/films/page/${5}`}>5</NavLink>
            </div>
        </nav>
    );
};

export default Naviget;