import React from 'react';

export function Card({ name, img, rating, genres, platforms }) {

    return (
        <div>
            <h3>{name}</h3>
            <h3>{rating}</h3>
            <div>
                {
                    typeof genres[0] === 'string'
                    ? genres.join(' / ')                        // search en api
                    : (genres.map(g => g.name).join(' / '))     // search en db (modelo relacionado)    
                }            
            </div>
            <div> {platforms.join(' / ')} </div>
            <img src={img} alt='img not found' width='100px' heght='100px'/>
        </div>
    )
};