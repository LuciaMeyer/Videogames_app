import React, { useEffect } from 'react';
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
    const id = props.match.params.id
    const idDb = id.length === 36

    
    useEffect(()=> {
        dispatch(getGameDetail(id))
        return () => { 
            dispatch(cleanGameDetail({}))
        }
    }, [dispatch, id]);

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
    }

    const windowWidth = 1180

    let loading = false
    if (!Object.keys(gameDetail).length) loading = true;
    if (gameDetail.msg) return (<><button><Link to='/home'>Back</Link></button><NotFound /></>)
    
    return (
        <>
            <div>
                <div className='topbarGD'>
                    <TopBar/>
                </div>

                <div className='NavGD'>
                    <div className='NavGD_ '>
                        <Nav windowWidth={windowWidth}/>
                    </div>
                </div>
                            
                { loading ? <div className='loadGD'><Loading /></div> :
                <>
                    <div className='conteinerGD'>
                        {gameDetail.rating &&
                            <div className='ratingGD'> 
                                <span className="starGD">&#9733;</span>
                                <h3 className='numRatingGD'>{gameDetail.rating}</h3>
                            </div>
                        }
                        <h2 className='nameGD'>{gameDetail?.name}</h2> 
                        <img className='imgGD' src={gameDetail?.img} alt={gameDetail?.name} />
                    </div>

                    <div className='conteinerGD_'>

                        {gameDetail.released &&
                            <div className='contH4Span'>
                                <h4 className='h4GD'>›› RELEASED:</h4>
                                <span className='spanGD'>{gameDetail.released}</span>
                            </div>
                        }
                        
                        <div className='contH4Span'>
                            <h4 className='h4GD'>›› GENRES:</h4>
                                {gameDetail.genres?.map((g, i) => 
                                    <>
                                        {typeof gameDetail.genres[0] === 'string' ?
                                            <span className='spanGD' key={i}>
                                                {g}{i < gameDetail.genres.length - 1 && ' -'}&nbsp;
                                            </span>
                                            :
                                            <span className='spanGD' key={i}>
                                                {g.name}{i < gameDetail.genres.length - 1 && ' -'}&nbsp;
                                            </span>
                                        }

                                    </>
                                )}
                        </div>

                        <div >
                            <h4 className='h4GD'>›› PLATFORMS:</h4>                  
                                {gameDetail.platforms?.map((p, i) => 
                                    <span className='spanGD' key={i}>
                                        {p}{i < gameDetail.platforms.length - 1 && ' -'}&nbsp;
                                    </span>
                                )}
                        </div>
                        <h3 className='h4GD'>›› DESCRIPTION</h3>
                        <span className='textGD'dangerouslySetInnerHTML={modifyDescription()}></span>
                    </div>
                </>
            }

            {/* JUEGO DE LA DB */}
            {/* {idDb && 
                <div className='detbutcont'>
                    <Link to={`/game/${id}/update`}>
                    <button className='detbut' type="button" onClick={handleUpdate}>Update</button>
                    </Link>
                    <button className='detbut1' type="button" onClick={handleDelete}>Delete</button>
                </div>
            } */}

        </div>
        <div className='footerGD'>
                <CreatedBy/>
        </div>   

        </>               
    )
};