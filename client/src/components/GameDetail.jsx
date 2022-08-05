import React from "react";
import { Link } from "react-router-dom";

export const GameDetail = (props) => {

    // const id = props.match.params.id

    return (
        <>
            <h5>Game Detail</h5>
            <button><Link to='/home'>Back</Link></button>        
        </>
    )
};