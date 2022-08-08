import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from './Nav'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getGenres, getPlatforms } from "../redux/actions";
import styled from "styled-components";



export const Create = () => {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.genres);
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres: [],
        img: '',
     });

    useEffect(() => {
        if(genres.length === 0) dispatch(getGenres()); // si entraron a Search ya está cargado, si entran a create se carga
        if(platforms.length === 0) dispatch(getPlatforms());
    }, [dispatch]);

    return (
        <>
            <Nav />
            <h5>Create</h5>
            <button><Link to='/home'>Back</Link></button>
            <MainConteiner>
                <FormConteiner>
                    <Form>
                        <div className="itemForm">             
                            <label>Name:</label>                    
                            <div>
                                <div className="dualInputConteiner">
                                    <input
                                        type= 'text'
                                        value= {input.name}
                                        name= 'name'                            
                                    />
                                </div>
                            </div>
                        <hr />
                        </div>

                        <div className="itemForm">               
                        <label>Description:</label>               
                            <div >
                                <textarea
                                    className="multipleOptConteiner"
                                    value={input.description}
                                    name="description"                    
                                />
                            </div>
                        </div>
                        
                        <div className="itemForm">
                            <label>Release:</label>
                            <div>
                                <div className="dualInputConteiner">
                                    <input
                                        type= 'text'
                                        value={input.released}
                                        name="released"
                                    />
                                </div>
                            </div>
                        <hr />    
                        </div>

                        <div className="itemForm">
                            <label>Rating:</label>
                            <div>
                                <div className="dualInputConteiner">
                                    <input
                                        type='number'
                                        value={input.rating}
                                        step='0.1'
                                        min= '0'
                                        max= '5'
                                        name='rating'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='itemForm'>
                            <label>Img:</label>
                            <div>
                                <div className="dualInputConteiner">
                                    <input
                                        type='text'
                                        value={input.img}
                                        name='img'
                                    />
                                </div>
                            </div>
                        <hr />
                        </div>

                        <div className='itemForm'>
                            <label>Genres:</label>
                            <div className="multipleOptConteiner">
                                {genres.map(genres => (
                                <>
                                    <input
                                        key={genres.id}
                                        type='checkbox'
                                        value={genres.id}
                                        id={genres.id}
                                    />
                                    <label>{genres.name}</label>
                                    <br />
                                </>
                                ))}
                            </div>
                        </div>
                        
                        <div className='itemForm'>
                            <label>Platforms:</label>
                            <div className="multipleOptConteiner">
                                {platforms.map(platforms => (
                                <>
                                    <input
                                        key={platforms.id}
                                        type='checkbox'
                                        value={platforms.id}
                                        id={platforms.id}
                                    />
                                    <label>{platforms.name}</label>
                                    <br />
                                </>
                                ))}
                            </div>
                        </div>
                        <div>
                            <input
                            type='submit'
                            value='create'
                            />
                        </div>         
                    </Form>
                </FormConteiner>
            </MainConteiner>
        </>
    )
};

const MainConteiner = styled.div`
  display: flex;
  padding: 95px 0 50px 0;
  margin: 0 60px 0 60px;
  justify-content: space-evenly;
  @media screen and (max-width: 700px) {
    margin: 0 20px 0 20px;
    padding: 90px 0 50px 0;
  }
`;
const FormConteiner = styled.div`
  width: 60%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  text-align: center;
  input[type="text"] {
    font-size: inherit;
  }
  span {
    font-size: 13px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  span {
    color: red;
  } 
  input[type="text"] {
    width: 100%;
    color: white;
    background-color: transparent;
    border: none;
    &:focus {
      outline: none;
    }
  }
  input[type="submit"] {
    margin: 20px 0px 20px 0;
    width: 75px;
    height: 30px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
  }
  .invalid {
    hr {
      border-color: red;
    }
  }
  .itemForm {
    margin-top: 30px;
    align-self: center;
    width: 90%;
    text-align: start;
  }
  .dualInputConteiner {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    div {
      display: inline-block;
      width: 47%;
    }
  }
  .multipleOptConteiner {
    border: 2px solid #ccc;
    width: 100%;
    height: 100px;
    overflow-y: scroll;
    background-color: transparent;
  }
  .buttonConteiner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;