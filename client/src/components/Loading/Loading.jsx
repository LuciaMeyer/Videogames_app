import React, { useEffect, useState } from "react";
import emoji from '../../img/emoji.png'
import './Loading.css'

export const Loading = () => {

    const [ time, setTime] = useState(false);

    useEffect(()=> {
        setTimeout(() =>{
            setTime(true)
        }, 4000)
    }, []);

    return (
        <div className="loader">
            <h3 className="h3loader"></h3>
            <div className="spinner"></div>
            {!!time &&
                <>
                    <span className="textLoader">loading...<br />NO TE DESESPERES!</span>
                    <img className="imgLoader" src={emoji} />
                    <span className="text1Loader">
                    Esta aplicación está alojada en un hosting gratuito... los tiempos de carga son un poco más lentos.<br />
                    Te invito a esperar unos segundos más para descubrir el funcionamiento de la app!!
                    </span>                    
                </>
            }
        </div>
    )
};