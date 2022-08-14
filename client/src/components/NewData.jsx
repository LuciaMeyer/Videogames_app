import React from "react";
import { Link } from "react-router-dom";

export const NewData = () => {


    return (
        <>  
            <h5>your game was successfully uploaded to our database!</h5>
            <button><Link to='/home'>Back</Link></button>
        </>
    )
};