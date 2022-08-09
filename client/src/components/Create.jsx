import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Nav } from './Nav'
import { getGenres } from '../redux/actions'
import { postGame } from '../helpers/postGame';
import { formControl } from '../helpers/formControl';
import { getPlatforms } from '../redux/actions'

export const Create = () => {

  const genres = useSelector(state => state.genres)
  const platforms = useSelector(state => state.platforms);
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    image: '',
    description: '',
    released: '',
    rating: '',
    genres: [],
    platforms: [],
  });
  const [errText, seterrText] = useState({});  

  useEffect(() => {
    if(genres.length === 0) dispatch(getGenres());
    if(platforms.length === 0) dispatch(getPlatforms());
  }, [dispatch, genres.length, platforms.length]);

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

  const handleSelect = e => {
    const selected = input[e.target.name]
      if (!selected.includes(e.target.value)) {
        selected.push(e.target.value)
        setInput({
          ...input,
          [e.target.name]: selected
        })
        seterrText(formControl({
          ...input,
          [e.target.name]: selected
        }));
      }
  }

  const handleDelete = (category, value) => {
    const newValues = input[category].filter(e => e !== value)
    setInput({
      ...input,
      [category]: newValues
    })

    seterrText(formControl({
      ...input,
      [category]: newValues
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    postGame(input)
  }

  const disabled = Object.keys(errText).length || !input.name

  const handlecheck = e => {
    const selected = input[e.target.name]
      if (!selected.includes(e.target.value)) {
        selected.push(e.target.value)
        setInput({
          ...input,
          [e.target.name]: selected
        })
        seterrText(formControl({
          ...input,
          [e.target.name]: selected
        }));
      }
  }

  return (
    <div >
      <Nav />
      <form onSubmit={handleSubmit} >
        <div >
          <h3 >Create your Video Game</h3>
        </div>

        <div>
          <label >Name: </label>
          <input  name='name' value={input.name}  autoComplete='off' onChange={handleChange}  />
          {errText.name && <span >{errText.name}</span>}
        </div><br/><br/>
        <hr />

        <div>
          <label >Description: </label>
          <textarea name='description' value={input.description} autoComplete='off' onChange={handleChange}  />
          {errText.description && <span >{errText.description}</span>}
        </div><br/><br/>
        <hr />

        <div>
          <label >Genres: </label>
              {genres.map( g => (
              <div key={g.id}>
                <input name='genres' type="checkbox" value={g.name} onChange={handlecheck} />
                <label >{g.name}</label>
              </div>
              ))}

          <div>
            {input.genres.map(g => {
              return (
                <div >
                  <span>{g}</span>
                  <button type='button' onClick={() => handleDelete('genres', g)}>x</button>
                </div>
              )
              })}
          </div>                       
            {errText.genres && <span>{errText.genres}</span>}
        </div><br/><br/>
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
          <label >Image URL: </label>
          <input name='image' value={ input.image ? input.image : 'no se cargó'}autoComplete='off' onChange={handleChange} />
          {errText.image && <span >{errText.image}</span>}
        </div><br></br>
        <hr />

        <div>
          <label >Platforms: </label>
          <select defaultValue='select' name='platforms' onChange={handleSelect}>
            <option value='select'>Select...</option>
              {platforms.map( p => (
              <option key={p.id} value={p.name}>{p.name}</option>
              ))}
          </select>
          <div>
            {input.platforms.map( p => {
              return (
                <div >
                  <span >{p}</span>
                  <button type='button' onClick={() => handleDelete('platforms', p)}>x</button>
                </div>
              )
              })}
          </div>
          {errText.platforms && <span >{errText.platforms}</span>}
        </div><br></br>
        <hr />
         
           <button disabled={disabled} type='submit' >Create</button>        
      </form>
    </div>
  );
};
