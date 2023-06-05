import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TopBar } from '../TopBar/TopBar';
import { CreatedBy } from '../CreatedBy/CreatedBy'
import  emoji2  from '../../img/emoji2.png'
import './SetGame.css'


export const SetGame = () => {
    const [time, setTime] = useState(false);
    const [isMounted, setIsMounted] = useState(true); // Variable de estado para rastrear si el componente está montado
  
    useEffect(() => {
      window.scrollTo(0, 0);
      const timeoutId = setTimeout(() => {
        if (isMounted) setTime(true)        
      }, 4000);
    
      return () => {
        setIsMounted(false);
        clearTimeout(timeoutId);
      };
    }, [isMounted]);
      

    return (
        <>
            <div className='topbarGD'>
                <TopBar/>
            </div>
            <div className='containSG'> 
            {
              !time ?
              <>
                <div className="spinner"></div>
                <span className='textSG'>Saving changes...</span>
              </>
              :
              <>
                <img className='imgSG' alt='home' src={emoji2}/>
                <span className='textSG'>
                    Your changes were saved!
                    <br />
                    Go Home to see it!
                </span>
                <div className='containbutCR'>
                <Link to='/home'><button className='butCR'>Home</button></Link>
                </div>
              </>
            }

            </div>
            <div className='footerGD'>
                <CreatedBy/>
            </div>
        </>  
    )
};

