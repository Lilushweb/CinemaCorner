import React, {useState} from 'react';
import {FaFilter} from "react-icons/fa";
import '../style/naviget.css'
import SortDropDownMenu from "./SortDropDownMenu.tsx";
import {NavLink} from "react-router-dom";

const Naviget = () => {
    const [check, setCheck] = useState(false)

    const handelClick = () => {
        setCheck(!check)
    }


    return (
        <nav>
            <div className="pageContenirTop">
                <NavLink className="page" to={`/films/page/${1}`}>1</NavLink>
                <NavLink className="page" to={`/films/page/${2}`}>2</NavLink>
            </div>
            <button className="sort" onClick={handelClick}><FaFilter/></button>
            <input className="serch" placeholder="Serch film"></input>
            <SortDropDownMenu check={check}/>
            <div className="pageContenirBottom">
                <NavLink className="page" to={`/films/page/${1}`}>1</NavLink>
                <NavLink className="page" to={`/films/page/${2}`}>2</NavLink>
            </div>
        </nav>
    );
};

export default Naviget;