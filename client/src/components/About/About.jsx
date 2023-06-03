import { useState, useEffect } from 'react';
import { Nav } from '../Nav/Nav';
import { CreatedBy } from '../CreatedBy/CreatedBy'
import { TopBar } from '../TopBar/TopBar';
import perfil from '../../img/perfil.png'
import henry from '../../img/henry.png'
import idioma from '../../img/idioma.png'
import './About.css'



export const About = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [language, setLanguage] = useState(true);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        window.scrollTo(0, 0);
        return () => window.removeEventListener("resize", handleResize);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const changeLanguage = () =>{
        setLanguage(!language)
    };

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
            <div className='conteinerAB'>
                <div className='contBuGD'>
                    <button className='butBack' onClick={()=>window.history.go(-1)}>BACK</button>
                </div>

                <h2 className='nameGD'>About this App</h2>
                <div className='containerImgAB'>
                    <img className='imgAB' src={perfil} alt=''></img>
                    <img className='imgAB' src={henry} alt=''/>
                </div>
                
                
                <div className='contTextAB'>
                    <span className='lineAB'></span>
                    <button className='butLen' onClick={changeLanguage}>
                        <img className='imgLG' src={idioma} alt='lg' />
                    </button>
                    {
                        language ?
                        <span className='textAB'>                   
                        This Single Page Application (SPA) was developed as part of the Full Stack Developer course at "Soy Henry" during the Individual Project stage. Its objective is to develop a web application that consumes data from an external API and queries its own database.
                        <br/><br/>
                        Features:<br/>
                        - Pagination<br/>
                        - Cumulative filters<br/>
                        - Ascending and descending sorting<br/>
                        - Detailed information pages<br/>
                        - Search by name<br/>
                        - Controlled form for creating new video games<br/>
                        <br/>
                        Technologies used:<br/>
                        - Language: JavaScript<br/>
                        - Database: PostgreSQL<br/>
                        - Back-End: Node.js, Express.js, Sequelize<br/>
                        - Front-End: React, Redux, Pure CSS<br/>
                        - Version control: Git/GitHub<br/>
                        <br/>
                        Created by Lucía Meyer
                        <br/>
                        August 2022
                        <br/>
                        Updated: June 2023
                    </span>
                    :
                    <span className='textAB'>                   
                        Esta SPA (Single Page Application) se desarrolló como parte del cursado de la carrera de Full Stack Developer en “Soy Henry”, en la etapa de Proyecto Individual.
                        Su objetivo es el desarrollo de una aplicación web que consume datos de una API externa y consultas a la base de datos propia.
                        <br/><br/>
                        Características:<br/>
                        - Paginado<br/>
                        - Filtros acumulativos<br/>
                        - Ordenamientos ascendentes y descendentes<br/>
                        - Páginas con información detallada<br/>
                        - Búsqueda por nombre<br/>
                        - Formulario controlado para la creación de nuevos videojuegos<br/>
                        <br/>
                        Tecnologías empleadas:<br/>
                        - Lenguaje: JavaScript<br/>
                        - Database: PostgreSQL<br/>
                        - Back-End: Node.js, Express.js, Sequelize<br/>
                        - Front-End: React, Redux, CSS puro<br/>
                        - Control de versiones: Git/GitHub<br/>
                        <br/>
                        Realizado por Lucía Meyer
                        <br/>
                        Agosto 2022
                        <br/>
                        Actualización: Junio 2023
                    </span>
                    }
                </div>

            </div>  
            <div className='footerGD'>
                    <CreatedBy/>
            </div>  
        </>
        
    )
};