import React from 'react';
import { Link } from 'react-router-dom';


export function Landing() {
    
    return (
        <div>
            <h1> Landing Page </h1>
                <Link to = '/home'>
                    <button> Enter </button>
                </Link>
        </div>
    )
};