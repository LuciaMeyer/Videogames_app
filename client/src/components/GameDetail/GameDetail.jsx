import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGameDetail, cleanGameDetail, getGames, cleanAllFilters, gameUpdate } from '../../redux/actions';
import { NotFound } from '../NotFound/NotFound'
import { Loading } from '../Loading/Loading'
import { deleteGame } from '../../helpers/deleteGame';
import { Nav } from '../Nav/Nav';
import { TopBar } from '../TopBar/TopBar';
import { CreatedBy } from '../CreatedBy/CreatedBy'

import './GameDetail.css'

export const GameDetail = (props) => {

    const dispatch = useDispatch();
    const history = useHistory()
    const gameDetail = useSelector(state => state.gameDetail)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const id = props.match.params.id
    const idDb = id.length === 36
    
    useEffect(()=> {
        dispatch(getGameDetail(id))
        window.scrollTo(0, 0);
        return () => { 
            dispatch(cleanGameDetail({}))
        }
    }, [dispatch, id]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        window.scrollTo(0, 0);
        return () => window.removeEventListener("resize", handleResize);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleUpdate = () => {
        dispatch(gameUpdate(gameDetail));        
    };

    const handleDelete = () => {
        deleteGame(id);
        dispatch(getGames());
        dispatch(cleanAllFilters());
        history.push('/setgame');
    };

    const modifyDescription = () => {
        return {__html: gameDetail?.description};
    };

    let loading = false
    if (!Object.keys(gameDetail).length) loading = true;
    if (gameDetail.msg) return (<><button><Link to='/home'>Back</Link></button><NotFound /></>);
    
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
                        
            { loading ? <div className='loadGD'><Loading /></div> : <>
                <div className='conteinerGD'>

                    <div className='contBuGD'>
                        <button className='butBack' onClick={()=>window.history.go(-1)}>BACK</button>
                        {!!gameDetail.rating &&
                            <div className='ratingGD'> 
                                <span className="starGD">&#9733;</span>
                                <h3 className='numRatingGD'>{gameDetail.rating}</h3>
                            </div>
                        }
                        {idDb &&  
                            <div className='contButEditGD'>
                                <Link to={`/game/${id}/update`}>
                                    <button className='butGD' type="button" onClick={handleUpdate}>EDIT</button>
                                </Link>
                                <button className='butDeleteGD' type="button" onClick={handleDelete}>X</button>
                            </div>
                        }
                    </div>
                    <h2 className='nameGD'>{gameDetail?.name}</h2> 
                    <img className='imgGD' src={gameDetail?.img} alt={gameDetail?.name} />
                </div>

                <div className='conteinerGD_'>
                    {gameDetail.released &&
                        <div className='contDetSpan'>
                            <h4 className='h4GD'>›› RELEASED ‹‹</h4>
                            <h4 className='detGD'>{gameDetail.released?.split('-').reverse().join('-')}</h4>
                        </div>
                    }
                    
                    <div className='contDetSpan'>
                        <h4 className='h4GD'>›› GENRES ‹‹</h4>
                            {gameDetail.genres?.map((g, i) => 
                                <Fragment key={i}>
                                    {typeof gameDetail.genres[0] === 'string' ?
                                        <span className='detGD' >
                                            {g}{i < gameDetail.genres.length - 1 && ' -'}&nbsp;
                                        </span>
                                        :
                                        <span className='detGD' key={i}>
                                            {g.name}{i < gameDetail.genres.length - 1 && ' -'}&nbsp;
                                        </span>
                                    }
                                </Fragment>
                            )}
                    </div>

                    <div className='contDetSpan'>
                        <h4 className='h4GD'>›› PLATFORMS ‹‹</h4>                  
                            {gameDetail.platforms?.map((p, i) => 
                                <span className='detGD' key={i}>
                                    {p}{i < gameDetail.platforms.length - 1 && ' -'}&nbsp;
                                </span>
                            )}
                    </div>
                    <div className='contTextSpan'>
                        <h3 className='h4GD'>›› DESCRIPTION</h3>
                        <span className='lineGD'></span>
                        <span className='textGD'dangerouslySetInnerHTML={modifyDescription()}></span>
                    </div>
                </div>
            </>}
            <div className='footerGD'>
                <CreatedBy/>
            </div>   
        </>               
    )
};