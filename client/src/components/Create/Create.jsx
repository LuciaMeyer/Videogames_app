import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { postGame } from '../../helpers/postGame';
import { formControl } from '../../helpers/formControl';
import { getPlatforms, cleanAllFilters, getGenres, getGames } from '../../redux/actions'
import { TopBar } from '../TopBar/TopBar';
import { Nav } from '../Nav/Nav';
import { CreatedBy } from '../CreatedBy/CreatedBy'
import { Loading } from '../Loading/Loading'

import './Create.css'

export const Create = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [errText, seterrText] = useState({});  
    const [input, setInput] = useState({
        name: '',
        img: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        if(!genres.length) dispatch(getGenres())         
        if(!platforms.length) dispatch(getPlatforms())
        window.scrollTo(0, 0);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        window.scrollTo(0, 0);
        return () => window.removeEventListener("resize", handleResize);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        seterrText(formControl({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    const handleCheck = (e) => {
        const value = e.target.value
        if (!input[e.target.name].includes(value)) {
            setInput({
                ...input,
                [e.target.name]: [...input[e.target.name], value]
            });
            seterrText(formControl({
                ...input,
                [e.target.name]: [...input[e.target.name], value]
            }));
        } else {
            setInput({
                ...input,
                [e.target.name]: input[e.target.name].filter(n => n !== value)
            });
            seterrText(formControl({
                ...input,
                [e.target.name]: input[e.target.name].filter(n => n !== value)
            }));
        }    
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!input.img.length) input.img = 'https://bit.ly/3Qfwp3B'
        postGame(input);
        dispatch(cleanAllFilters());
        dispatch(getGames());
        history.push('/setgame');
    };

    const disabled = Object.keys(errText).length || !input.name // para que se pueda mandar tiene que ser false
    let loading = false
    if(!genres.length || !platforms.length) loading = true

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

            <div className='conteinerCR'>
                <div className='contBuGD'>
                    <button className='butBack' onClick={()=>window.history.go(-1)}>BACK</button>
                </div>
                <h2 className='nameGD'>Create your video game</h2>
                {loading ? <div className='loadGD'><Loading /></div> : 
                    <form onSubmit={handleSubmit}>
                        <div className='label-span'>
                            <label className='labelform'>Name</label>
                            {errText.name &&
                                <span className='errorSpan'>&nbsp;❯ {errText.name}</span>
                            }
                        </div>
                        <input className='inputform'
                            name='name' value={input.name}
                            maxLength= '30'
                            onChange={handleChange}
                        /> 

                        <div className='label-span'>
                            <label className='labelform' >Rating</label>
                            {errText.rating &&
                                <span className='errorSpan'>&nbsp;❯ {errText.rating}</span>
                            }
                        </div>                       
                        <input className='inputform'
                            name='rating'
                            type='number'
                            step='0.1'
                            min='0'
                            max='5'
                            value={input.rating} 
                            onChange={handleChange}
                        />

                        <div className='label-span'>
                            <label className='labelform'>Release date</label>
                            {errText.released &&
                                <span  className='errorSpan'>&nbsp;❯ {errText.released}</span>
                            }                           
                        </div>
                        <input className='inputform'
                        name='released'
                        placeholder= '2022-08-09'
                        value={input.released}
                        onChange={handleChange}
                        />

                        <div className='label-span'>
                            <label className='labelform'>Description</label>
                            {errText.description &&
                                <span  className='errorSpan'>&nbsp;❯ {errText.description}</span>
                            }
                        </div>
                        <textarea className='inputform'
                            name='description'
                            value={input.description} 
                            maxLength= '500'
                            onChange={handleChange}
                        />

                        <div className='label-span'>
                            <label className='labelform'>URL Image</label>
                            {errText.img &&
                                <span  className='errorSpan'>&nbsp;❯ {errText.img}</span>
                            }
                        </div>
                        <input className='inputform'
                            name='img'
                            placeholder= 'url...'
                            value={ input.img }
                            onChange={handleChange}
                        />
                                                    
                        <div className='maincontchecks'>
                        <div className='contchecks'>
                                <label className='labelcheck'>Platforms</label>
                                {errText.platforms ?
                                    <span className='errorSpan'>&nbsp;❯ {errText.platforms}</span>
                                    :
                                    <span className='errorSpan'>&nbsp;</span>
                                }
                                <div className="check">
                                    {platforms?.map(p => 
                                        <div className='aligncheck' key={p.id}>
                                            <input className='inputcheck'
                                                name='platforms'
                                                type="checkbox"
                                                value={p.name}
                                                onChange={handleCheck}
                                            />
                                            <label className='optioncheck' htmlFor={p.id}>{p.name}</label>               
                                        </div>
                                    )}                    
                                </div>                   
                            </div>

                            <div className='contchecks_'>
                                <label className='labelcheck'>Genres</label>
                                {errText.genres ?
                                    <span className='errorSpan'>&nbsp;❯ {errText.genres}</span>
                                    :
                                    <span className='errorSpan'>&nbsp;</span>
                                }                        
                                <div className="check">
                                    {genres?.map(g => 
                                        <div className='aligncheck' key={g.id}>
                                            <input className='inputcheck'
                                            name='genres'
                                            type="checkbox"
                                            value={g.name}
                                            onChange={handleCheck}
                                            /> 
                                            <label className='optioncheck' htmlFor={g.id}>{g.name}</label>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {windowWidth > 500 &&
                                <div className='containbutCR'>
                                    <input
                                        className={`butCR${disabled ? 'none' : ''}`}
                                        disabled={disabled}
                                        type="submit"
                                        value='Create'
                                    />
                                </div>                           
                            }
                        </div>
                        {disabled &&
                        <div className='alignspan'>
                            <span className='errorSpan'>Fill in all the fields to be able to create</span>
                        </div>
                        }
                        {windowWidth <= 500 &&
                            <div className='containbutCR'>
                                <input
                                    className={`butCR${disabled ? 'none' : ''}`}
                                    disabled={disabled}
                                    type="submit"
                                    value='Create'
                                />
                            </div> 
                        }
                    </form>
                }  
            </div>

            <div className='footerGD'>
                <CreatedBy/>
            </div>
        </>

    );
};
