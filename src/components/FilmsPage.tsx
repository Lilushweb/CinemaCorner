import React, { FC } from 'react';
import FilmsContainer from "./FilmsContainer.tsx";
import '../style/filmItem.css'
import Navigate from "./Navigate.tsx";

interface IFilmsPageProps {
    page: number
}


const FilmsPage: FC<IFilmsPageProps> = ({ page }) => {
    return (
        <div>
            <Navigate />
            <FilmsContainer page={page} />
        </div>
    );
};

export default FilmsPage;