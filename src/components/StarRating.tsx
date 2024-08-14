import React from 'react'
import '../style/starRating.css'

interface IStarRating {
    ratingKinopoisk: number
}

const StarRating = ({ ratingKinopoisk }: IStarRating) => {
    return (
        <div className="ratingContener">
            <span style={{
                color: ratingKinopoisk > 5 ? "#66FF00" : "red",
            }}>
                {ratingKinopoisk}
            </span>
        </div>
    )
}

export default StarRating