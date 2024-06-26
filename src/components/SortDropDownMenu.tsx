import React, {FC, useCallback, useEffect, useState, useMemo} from 'react';
import '../style/SortDropDownMenu.css'
import {useSelector} from "react-redux";
import {setFilms, } from "../store/reducers/filmsSlice.ts";

interface ISortDropDownMenuProps {
    check: boolean;
}



const SortDropDownMenu: FC<ISortDropDownMenuProps> = ({ check }) => {



    return (
        check? (
            <div className="dropDownMenu">
                <label>
                    <input
                        type="radio"
                        name="sortOrder"
                        value="asc"
                        checked={sortOrder === 'asc'}
                        onChange={(e) => setSortOrder(e.target.value)}
                    />
                    Sort Year 1 - 9
                </label>
                <label>
                    <input
                        type="radio"
                        name="sortOrder"
                        value="desc"
                        checked={sortOrder === 'desc'}
                        onChange={(e) => setSortOrder(e.target.value)}
                    />
                    Sort Year 9 - 1
                </label>
            </div>
        ) : null
    );
};

export default SortDropDownMenu;