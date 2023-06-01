import React from "react";
import { Nav } from '../Nav/Nav';
import { CreatedBy } from '../CreatedBy/CreatedBy'
import { TopBar } from '../TopBar/TopBar';
import perfil from '../../img/perfil.png'
import './About.css'


export const About = () => {

    const windowWidth = 1180

    return (
        <>
            <div className='topbarGD'>
                <TopBar/>
            </div>

            <div className='NavGD'>
                <div className='NavGD_ '>
                    <Nav windowWidth={windowWidth}/>
                </div>
            </div>
            <div className='conteinerGD'>
                <div className='contBuGD'>
                    <button className='butBack' onClick={()=>window.history.go(-1)}>BACK</button>
                </div>

                <h2 className='nameGD'>About this App</h2>
                <div className='containerImgAB'>
                    <img className='imgAB' src={perfil} alt=''></img>
                    <img className='imgAB' src='https://assets.soyhenry.com/logoOG.png' alt=''/>
                </div>
                
                
                <div className='contTextAB'>
                    <span className='lineAB'></span>
                    <span className='textAB'>
                        Esta SPA (Single Page Application) se desarrolló como parte del cursado de la carrera de Full Stack Developer en “Soy Henry”, en la etapa de Proyecto Individual.
                        Su objetivo es el desarrollo de una aplicación web que consume datos de una API externa y consultas a la base de datos propia.
                        <br/><br/>
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
                        Realizado por Lucía Meyer
                        <br/>
                        Agosto 2022
                        <br/>
                        Actualización: Junio 2023
                    </span>
                </div>

            </div>  
            <div className='footerGD'>
                    <CreatedBy/>
            </div>  
        </>
        
    )
};