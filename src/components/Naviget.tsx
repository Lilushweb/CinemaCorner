import React from 'react';
import {FaFilter} from "react-icons/fa";
import '../style/naviget.css'

const Naviget = () => {
    return (
        <nav>
            <button className="sort"><FaFilter /></button>
            <input className="serch" placeholder="Serch film"></input>
        </nav>
    );
};

export default Naviget;