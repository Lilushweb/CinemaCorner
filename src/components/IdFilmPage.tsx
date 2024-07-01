import React from 'react';
import {IStaff} from "../models/IStaff.ts";
import {filmsApi} from "../services/PostService.ts";
import {useNavigate, useParams} from "react-router-dom";
import '../style/IdFilmPage.css'


const IdFilmPage: React.FC = () => {
    const { id } = useParams();
    const {data, error, isLoading} = filmsApi.useStaffQuery(id);
   data && console.log(data)
    const navigate = useNavigate();
   const handleClick = () => {
       navigate('/films/page/1',{replace: true})
   }
    const staff: IStaff = data
    return (
        <div>
            <button onClick={handleClick}>На главную</button>
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1>{error.status}</h1>}
            {staff &&
                <>

                    <img className="foto" alt={staff.posterUrl} src={staff.posterUrl} />
                    <h1 className="name">{staff.nameRu}</h1>
                    <div className="profession">
                        <span className="Karera">Карьера</span>
                        <span className="Actor">{staff.profession}</span>
                    </div>
                </>
            }

        </div>


    );
};

export default IdFilmPage;