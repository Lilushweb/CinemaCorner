import React, {FC} from 'react';
import FilmsContainer from "./FilmsContainer.tsx";
import '../style/filmItem.css'
import Naviget from "./Naviget.tsx";

interface IFilmsPageProps {
    page: number
}


const FilmsPage: FC <IFilmsPageProps> = ({page}) => {
    return (
        <div>
            <Naviget/>
            <FilmsContainer page={page}/>
        </div>
    );
};

export default FilmsPage;