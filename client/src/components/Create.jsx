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
  const [errors, setErrors] = useState({});  

  useEffect(() => {
    if(genres.length === 0) dispatch(getGenres());
    if(platforms.length === 0) dispatch(getPlatforms());
  }, [dispatch, genres.length, platforms.length]);

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(formControl({
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
        setErrors(formControl({
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
    setErrors(formControl({
      ...input,
      [category]: newValues
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    postGame(input)
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
          {errors.name && <span >{errors.name}</span>}
        </div><br/><br/>
        <hr />

        <div>
          <label >Description: </label>
          <textarea name='description' value={input.description} autoComplete='off' onChange={handleChange}  />
          {errors.description && <span >{errors.description}</span>}
        </div><br/><br/>
        <hr />

        <div>
          <label >Genres: </label>
          <select defaultValue='select' name='genres' onChange={handleSelect}>
            <option value='select' >Select...</option>
              {genres.map( g => (
              <option key={g.id} value={g.name}>{g.name}</option>
              ))}
          </select>
          <div>
            {input.genres.map(g => {
              return (
                <div >
                  <span >{g}</span>
                  <button type='button' onClick={() => handleDelete('genres', g)}>x</button>
                </div>
              )
              })}
          </div>                       
            {errors.genres && <span>{errors.genres}</span>}
        </div><br/><br/>
        <hr />
        
        <div>
          <label >Release date: </label>
          <input name='released' value={input.released} autoComplete='off' onChange={handleChange} />
          {errors.released && <span >{errors.released}</span>}
        </div><br></br>
        
        <div> 
          <label >Rating: </label>
          <input type='number' step='0.1' min= '0' max= '5' value={input.rating} autoComplete='off' onChange={handleChange} />
          {errors.rating && <span >{errors.rating}</span>}
        </div><br></br>
        <hr />

        <div>
          <label >Image URL: </label>
          <input name='image' value={input.image} autoComplete='off' onChange={handleChange} />
          {errors.image && <span >{errors.image}</span>}
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
          {errors.platforms && <span >{errors.platforms}</span>}
        </div><br></br>
        <hr />
        <button type='submit' >Create</button>
      </form>
    </div>
  );
};
