import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../style/starRating.css'

const createArray = length => [...Array(length)];

interface StarRatingProps {
    totalStars?: number;
    selectedStar?: number;
}

const Star = ({ selected = false , onSelect = f => f}) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 10, selectedStar = 0 }: StarRatingProps) {
  return (
      <>
      {createArray(totalStars).map((n, i) => (
        <Star 
        key={i} 
        selected={selectedStar > i}
        />
      ))}
      </>
  );
}