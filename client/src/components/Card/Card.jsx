import React from 'react';
import './Card.css'


export function Card({ name, img, rating, genres, platforms, released }) {

    return (
        < >
            <div className='card0'>
                <div className='rating'>
                    <span className="star">&#9733;<h3 className='numRating'>{rating}</h3></span>
                </div>
                <img className='imgcard' src={img} alt='img not found' /> 
                <div className='card1'>
                    <h2 className='name'>{name}</h2>
                    <div className='detail'>
                        <h4 className='cardh4'>GENRE: {genres.join(' | ')} </h4>
                        <h4 className='cardh4'>PLATFORMS: {platforms.join(' | ')}</h4>
                        <h4 className='cardh4'>RELEASED: {released}</h4>
                    </div>
                </div>
            </div>
        </>

    )
};