import React from "react";
import { Link } from "react-router-dom";
import { Nav } from './Nav'


export const Create = () => {


    return (
        <>
            <Nav />
            <h5>Create</h5>
            <button><Link to='/home'>Back</Link></button>
        </>
    )
};