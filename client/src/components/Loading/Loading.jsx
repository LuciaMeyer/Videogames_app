import React, { useEffect, useState } from "react";
import emoji from '../../img/emoji.png';
import emoji1 from '../../img/emoji1.png';
import './Loading.css';

export const Loading = () => {
  const [time, setTime] = useState(false);
  const [broken, setBroken] = useState(false);
  const [isMounted, setIsMounted] = useState(true); // Variable de estado para rastrear si el componente está montado

  useEffect(() => {
    let timeoutId1;
    let timeoutId2;

    timeoutId1 = setTimeout(() => {
      if (isMounted) {
        setTime(true);
      }
    }, 5000);

    timeoutId2 = setTimeout(() => {
      if (isMounted) {
        setTime(false);
        setBroken(true);
      }
    }, 60000);

    return () => {
      setIsMounted(false); // Marca el componente como desmontado al limpiar el efecto
      clearTimeout(timeoutId1); // Limpia el temporizador 1 al desmontar el componente
      clearTimeout(timeoutId2); // Limpia el temporizador 2 al desmontar el componente
    };
  }, [isMounted]);

  return (
    <div className="loader">
      <div className="spinner"></div>
      {!!time && (
        <>
          <span className="textLoader">
            loading...
            <br />
            NO TE DESESPERES!
          </span>
          <img className="imgLoader" src={emoji} alt="not found" />
          <span className="text1Loader">
            Esta aplicación está alojada en un hosting gratuito... los tiempos de carga son un poco más lentos.
            <br />
            Te invito a esperar unos segundos más para descubrir el funcionamiento de la app!!
          </span>
        </>
      )}
      {!!broken && (
        <>
          <span className="textLoader">Ups!</span>
          <img className="imgLoader" src={emoji1} alt="not found" />
          <span className="text1Loader">
            Parece que algo no anda bien...
            <br />
            Gracias por la paciencia, por favor contáctame para que pueda solucionarlo.
          </span>
        </>
      )}
    </div>
  );
};
