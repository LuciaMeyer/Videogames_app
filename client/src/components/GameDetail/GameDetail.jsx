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
        <div>
            <TopBar/>
            <div className='NavGD'><div className='NavGD_ '><Nav windowWidth={windowWidth}/>  </div></div>
                     
            {/* <div className='NavGD'></div> */}
            
            { loading ? <Loading /> :
            <div className='contdet3'>
                <div className='contdet4'>

                        <h2 className='detname'>{gameDetail?.name}</h2> 

                        <img className='imgdet' src={gameDetail?.img} alt={gameDetail?.name} />
                        <div className='divdet'>
                            <span className="stardet">&#9733;</span>
                            { gameDetail.rating && <h3 className='deth3'>Rating: {gameDetail.rating}</h3> }
                        </div>

                        { gameDetail.released && <h3 className='deth3'>Released | {gameDetail.released}</h3> }
                        
                        <div className='divdet'><h3 className='deth3'>Genres | </h3> 
                            { gameDetail.genres?.map((g, i) => {
                                if (typeof gameDetail.genres[0] === 'string') {
                                    return <h3 className='deth3' key={i}>{g}<span> | </span></h3>
                                            
                                } else {
                                    return <h3 className='deth3' key={i}>{g.name}<span> | </span></h3>
                                }
                            })}                           
                        </div>
                        <div className='divdet'><h3 className='deth3'>Platforms | </h3> 
                            { gameDetail.platforms?.map((p, i) => 
                                <h3 className='deth3' key={i}>{p}<span> | </span></h3>
                            )}
                        </div>                      
                </div>
                <div>
                    <h3 className='deth3'>Description</h3>
                    <div className='divdet2' dangerouslySetInnerHTML={modifyDescription()} />
                </div>
            </div>
            }

            {/* JUEGO DE LA DB */}
            {idDb && 
                <div className='detbutcont'>
                    <Link to={`/game/${id}/update`}>
                    <button className='detbut' type="button" onClick={handleUpdate}>Update</button>
                    </Link>
                    <button className='detbut1' type="button" onClick={handleDelete}>Delete</button>
                </div>
            }

        </div>                  
    )
};