import React from 'react';
import './Card.css'


export function Card({ name, img, rating, genres, platforms }) {

    return (
        <div >
            <img src={img} alt='img not found' /> 
            <div className='card1'>
                <div >
                    <span className="star">&#9733;</span>
                    <h3 className='cardh3'>{rating}</h3>
                </div>
                <div><h2 className='cardh2'>{name}</h2></div>
                <div><h4 className='cardh4'>{genres.join(' | ')} </h4></div>
                <div><h4 className='cardh4'>{platforms.join(' | ')}</h4></div>           
            </div>                  
        </div>
    )
};