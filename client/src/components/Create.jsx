import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getGenres } from '../redux/actions'
import { postGame } from '../helpers/postGame';
import { formControl } from '../helpers/formControl';
import { getPlatforms, clearAllFilters, getGames } from '../redux/actions'

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
    dispatch(clearAllFilters());
    dispatch(getGames());
    history.push('/home');
  };


  
  const disabled = Object.keys(errText).length || !input.name // para que se pueda mandar tiene que ser false

  return (
    <div >
      <form onSubmit={handleSubmit} >
        <div >
          <h3 >Create your Video Game</h3>
        </div>

        <div>
          <label >Name: </label>
          <input  name='name' value={input.name}  autoComplete='off' maxLength= '30' onChange={handleChange}  />
          {errText.name && <span >{errText.name}</span>}
        </div><br/><br/>
        <hr />

        <div>
          <label >Description: </label>
          <textarea name='description' value={input.description} autoComplete='off' maxLength= '500' onChange={handleChange}  />
          {errText.description && <span >{errText.description}</span>}
        </div><br/><br/>
        <hr />

        <div>
          <label>Genres: </label>
              {genres.map( g => (
                <div key={g.id}>
                  <input name='genres' type="checkbox" value={g.name} onChange={handleCheck} />
                  <label >{g.name}</label>
                </div>
              ))}                
            {errText.genres && <span>{errText.genres}</span>}
        </div><br/><br/>
        <hr />
        <div>
            <label>Platforms: </label>
              {platforms.map( p => (
                <div key={p.id}>
                  <input name='platforms' type="checkbox" value={p.name} onChange={handleCheck} />
                  <label >{p.name}</label>
                </div>
              ))}  
          {errText.platforms && <span >{errText.platforms}</span>}
        </div><br></br>
        <hr />   
        <div>
          <label >Release date: </label>
          <input name='released' placeholder= '2022-08-09' value={input.released} autoComplete='off' onChange={handleChange} />
          {errText.released && <span >{errText.released}</span>}
        </div><br></br>
        
        <div> 
          <label >Rating: </label>
          <input name='rating' type='number' step='0.1' min='0' max='5' value={input.rating} autoComplete='off' onChange={handleChange} />
          {errText.rating && <span >{errText.rating}</span>}
        </div><br></br>
        <hr />

        <div>
          <label >URL img:</label>
          <input name='img' value={ input.img ? input.img : input.img = 'https://bit.ly/3Qfwp3B'} autoComplete='off' onChange={handleChange} />
          {errText.img && <span >{errText.img}</span>}
        </div><br></br>
        <hr />   
           <button disabled={disabled} type='submit' >Create</button>     
      </form>
    </div>
  );
};
