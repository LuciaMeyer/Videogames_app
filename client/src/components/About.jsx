import React from "react";
import { Nav } from './Nav';
import './About.css'


export const About = () => {


    return (
        <div className='condab1'>
            <div className='imgbackab'><img  alt='' /></div>
            <div className='contab2 '><Nav /></div>
            <div className='contab3'>
                <div className='contab4'>
                    <h2 className='abname'>About this App</h2>
                    <img className='imgab' src='https://assets.soyhenry.com/logoOG.png' alt=''/>
                    <span className='spanab'>
                        Esta SPA (Single Page Application) se desarrolló como parte del cursado de la carrera de Full Stack Developer en “Soy Henry”, en la etapa de Proyecto Individual.
                        Su objetivo es el desarrollo de una aplicación web que consume datos de una API externa y consultas a la base de datos propia.
                        <br/>
                        Características:<br/>
                        - Paginado<br/>
                        - Filtros acumulativos <br/>
                        - Ordenamientos ascendentes y descendentes<br/>
                        - Páginas con información detallada<br/>
                        - Búsqueda por nombre<br/>
                        - Formulario controlado para la creación de nuevos videojuegos<br/>
                        <br/>
                        Tecnologías empleadas:<br/>
                        - Lenguaje: JavaScript<br/>
                        - Data Base: PostgreSQL<br/>
                        - Back-End: nodeJS, ExpressJS, Sequelize<br/>
                        - Front-End: React, Redux, CSS puro<br/>
                        - Control de versiones: Git/GitHub<br/>
                        <br/>
                        Realizado por: Lucía Meyer
                    </span>
                </div>
            </div>
            <div className='slidesab'></div>
            <div className='pagab'></div>
        </div>  
    )
};