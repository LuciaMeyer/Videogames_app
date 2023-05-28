import React from "react";
import './CreatedBy.css'
import lin from '../../img/in.png'
import gh from '../../img/gh.png'
import da from '../../img/da.png'


export const CreatedBy = () => {

    const linkedin = 'https://www.linkedin.com/in/luciameyer/'
    const github = 'https://github.com/LuciaMeyer'
    
    return (
        <div className="containCreated1">
            <img className="imgCreatedDA" src={da} alt="not found" />
            <span className="created">created by Lucía Meyer</span>
            <a href={linkedin} target="_blank" rel="noreferrer">
                <img className="imgCreated" src={lin} alt="not found" />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
                <img className="imgCreated" src={gh} alt="not found" />
            </a>
        </div>
    );    
};