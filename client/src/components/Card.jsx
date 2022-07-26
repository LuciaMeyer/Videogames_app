import React from 'react';

export default function Card({ name, img, rating }) {
    return (
        <div>
            <h3>{name}</h3>
            <h1>{rating}</h1>
            <img src={img}/>
        </div>
    )
};