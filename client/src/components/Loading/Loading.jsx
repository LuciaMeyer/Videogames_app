import React, { useEffect, useState } from "react";
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
            <h3 className="h3loader">loading...</h3>
            <div className="spinner"></div>
            {!!time &&
                <>
                    <span className="textLoader">NO TE DESESPERES!</span>
                    <span className="text1Loader">
                    Esta aplicación está alojada en un hosting gratuito... los tiempos de carga son un poco más lentos.<br />
                    Te invito a esperar unos segundos más para descubrir el funcionamiento de la app!!
                    </span>
                </>
            }
        </div>
    )
};