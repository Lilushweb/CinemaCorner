import React from 'react';

const StarRating = ({rating}) => {
    return (
        <span style={{
            color: rating > 5 ? "#66FF00" : "red",
        }}>
            {rating}
        </span>
    );
};

export default StarRating;