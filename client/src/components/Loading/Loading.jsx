import React, { useEffect } from "react";
import './Loading.css'

export const Loading = () => {

    return (
        <div className="loader">
            <h3 className="h3loader">Loading...</h3>
            <div className="spinner"></div>
        </div>
    )

};