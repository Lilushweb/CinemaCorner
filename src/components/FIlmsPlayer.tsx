import React from "react";
import { filmsApi } from "../services/FIlmsServerApi";
import { useNavigate, useParams } from "react-router-dom";
import "video-react/dist/video-react.css"
import ReactPlayer from "react-player";
import { IVidepApi } from "../models/IVideoApi";



const FilmsPlayer = () => {
    const navigate = useNavigate();
    const kinopoiskId = useParams()
    const { data, error, isLoading } = kinopoiskId.id
        ? filmsApi.useVideoQuery<IVidepApi>(kinopoiskId.id)
        : { data: undefined, error: undefined, isLoading: false };
    const yotube = data?.items.map((el) => {
        if (el.site == 'YOUTUBE') {
            return el.url
        } else return false
    })
    const handleClick = () => {
        navigate('/films/page/1', { replace: true })
    }
    data && console.log(data.items)
    // yotube?.filter(el => el != false)[0]
    return (
        <div>
            <button onClick={handleClick}>На главную</button>
            {error && <div>Произошла ошибка</div>}
            {isLoading && <div>Идет загрузка...</div>}
            {data && data.items.length < 1 && <div> Ошибка 500</div>}
            {data && data.items.length >= 1 &&
                <div>
                    <ReactPlayer
                        url={data.items[0].url}
                        controls={true}
                        width="750px"
                        height="500px"
                    />
                </div>
            }
        </div>
    );
};

export default FilmsPlayer;