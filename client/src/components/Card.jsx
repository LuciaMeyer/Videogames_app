import React from 'react';

export function Card({ name, img, rating, genres }) {
    return (
        <div>
            <h3>{name}</h3>
            <h1>{rating}</h1>
            <div>
            {
                typeof genres[0] === 'string'
                ? genres.join(' / ')
                : (genres.map(g => g.name).join(' / '))               
            }
            </div>
            <img src={img} alt='img not found' width='100px' heght='100px'/>
        </div>
    )
};