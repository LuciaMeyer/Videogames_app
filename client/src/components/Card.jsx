import React from 'react';
import './Card.css'


export function Card({ name, img, rating, genres, platforms }) {

    return (

        <div className='card'>
            <div className='card1'>
                <div>
                    <h3>{name}</h3>
                </div>
                <div>
                    <h3>{rating}</h3>
                </div>
                <div>
                    {genres.join(' | ')}            
                </div>
                <div> {platforms.join(' | ')} </div>
            </div>
                <img src={img} alt='img not found' /> 
        </div>
    )
};