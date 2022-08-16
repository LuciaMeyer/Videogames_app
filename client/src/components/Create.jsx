import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getGenres } from '../redux/actions'
import { postGame } from '../helpers/postGame';
import { formControl } from '../helpers/formControl';
import { getPlatforms, cleanAllFilters, getGames } from '../redux/actions'
import { Nav } from './Nav';
import './Create.css'
import styled from "styled-components";

export const Create = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const allGames = useSelector(state => state.allGames);
  const genres = useSelector(state => state.genres);
  const platforms = useSelector(state => state.platforms);
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
  
  if(!allGames.length && !genres.length && !platforms.length) {
    dispatch(getGames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    seterrText(formControl({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

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
    postGame(input)
    setInput({ // controlar si hace falta setearlo! 
        name: '',
        img: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    })
    dispatch(cleanAllFilters());
    dispatch(getGames());
    history.push('/gamecreated');
};

const disabled = Object.keys(errText).length || !input.name // para que se pueda mandar tiene que ser false

return (
<div className='condcr1'>
    <div className='imgbackcr'><img  alt=''/></div>
    <div className='contcr2 '><Nav /></div>
    <div className='contcr3'>
        <div className='contcr4'>

            <Form onSubmit={handleSubmit}>

                <div className='contizq'>
                    <div className={errText.name ? "itemForm invalid" : "itemForm"}>
                        <label className='labelform'>
                        Name {errText.name && <span className='redspan'>》》 {errText.name}</span>}
                        </label>
                        <div>
                            <div >
                                <input className='inputform' name='name' value={input.name}  autoComplete='off' maxLength= '30' onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={errText.rating ? "invalid" : ""}>
                        <label className='labelform' >
                        Rating:{errText.rating && <span className='redspan'>》》 {errText.rating}</span>}
                        </label>
                        <div >
                            <div >
                                <input className='inputform' name='rating' type='number' step='0.1' min='0' max='5' value={input.rating} autoComplete='off' onChange={handleChange} />            
                            </div>
                        </div>
                    </div>

                    <div className="itemForm">
                        <label className='labelform'>
                        Release date: 
                        {errText.released && <span  className='redspan'>》》 {errText.released}</span>}
                        </label>
                        <div >
                            <div className={errText.released ? "invalid" : ""}>
                                <input className='inputform' name='released' placeholder= '2022-08-09' value={input.released} autoComplete='off' onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={ errText.description ? "itemForm invalid" : "itemForm" } >
                        <label className='labelform'>
                        Description:
                        {errText.description && <span  className='redspan'>》》 {errText.description}</span>}
                        </label>
                        <div >
                            <div>
                                <textarea className='inputform' name='description' value={input.description} autoComplete='off' maxLength= '500' onChange={handleChange}  />
                            </div>
                        </div>
                    </div>

                    <div className={errText.img ? "itemForm invalid" : "itemForm"}>
                        <label className='labelform'>
                        URL Image
                        {errText.img && <span  className='redspan'>》》 {errText.img}</span>}
                        </label>
                        <div>
                            <div >
                                <input className='inputform' name='img' placeholder= 'url...' value={ input.img } autoComplete='off' onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='contder'>
                    <div className='contchecks'>
                        <div className={ errText.genres ? "itemForm invalid" : "itemForm" }>
                            <label className='labelform' >Genres: </label>
                            {errText.genres && <span  className='redspan'>》》 {errText.genres}</span>}
                            <div className="contcheck1">
                                {genres.map(g => (
                                <Fragment key={g.id}>
                                    <input className='inputcheck'name='genres' type="checkbox" value={g.name} onChange={handleCheck} />
                                    <label htmlFor={g.id}>{g.name}</label>
                                    <br />
                                </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='contchecks'>
                        <div className={ errText.platforms ? "itemForm invalid" : "itemForm" }>
                            <label className='labelform' >Platforms: </label>
                            {errText.platforms && <span  className='redspan'>》》 {errText.platforms}</span>}
                            <div className="contcheck1">
                                {platforms.map(p => (
                                <Fragment key={p.id}>
                                    <input className='inputcheck' name='platforms' type="checkbox" value={p.name} onChange={handleCheck} />
                                    <label htmlFor={p.id}>{p.name}</label>
                                    <br />
                                </Fragment>
                                ))}
                            </div>
                        </div> 
                    </div>
                </div>

                <div>
                    <input
                    className='crbut'
                    disabled={disabled}
                    type="submit"
                    value='Create'
                    />
                </div>
            </Form>

        </div>
    </div>
    <div className='slidescr'></div>
    <div className='pagcr'></div>
</div>

  );
};























const Form = styled.form`
  .invalid {
    hr {
      border-color: red;
    }
  }

`
