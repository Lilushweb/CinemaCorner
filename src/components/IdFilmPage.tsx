import React from 'react';
import { IStaff } from "../models/IStaff.ts";
import { filmsApi } from "../services/FIlmsServerApi.ts";
import { useNavigate, useParams } from "react-router-dom";
import '../style/IdFilmPage.css'


const IdFilmPage: React.FC = () => {
    const { id } = useParams();
    const { data, error, isLoading } = filmsApi.useStaffQuery<IStaff>(id);
    data && console.log(data)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/films/page/1', { replace: true })
    }

    return (
        <div>
            <button onClick={handleClick}>На главную</button>
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1>{error.status}</h1>}
            {data &&
                <>

                    <img className="foto" alt={data.posterUrl} src={data.posterUrl} />
                    <h1 className="name">{data.nameRu}</h1>
                    <h3 className='age'>Возраст :</h3>
                    <h3 className='years'>{data.age} </h3>
                    <h3 className='birthdayText'>Дата рождения :</h3>
                    <h3 className='birthday'>{data.birthday}</h3>
                    <h3>{data.birthplace}</h3>
                    {data.facts[0] && <div className='facts'>{data.facts[0]}</div>}
                    <div className="profession">
                        <span className="Karera">Карьера</span>
                        <span className="Actor">{data.profession}</span>
                    </div>
                </>
            }

        </div>


    );
};

export default IdFilmPage;