import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowDown from "../../img/arrow-down.png";
import arrowTop from "../../img/arrow-top.png";
import styled, { keyframes } from "styled-components";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import cel1 from '../../img/cel1.png'
import cel2 from '../../img/cel2.png'
import cel3 from '../../img/cel3.png'
import { useDispatch } from "react-redux";
import { getGames } from '../../redux/actions';


export const Landing = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getGames());
  },[dispatch])  

    return (
        <>
          <Section id="1" style={{ backgroundImage: window.innerWidth > 700 ? `url(${img1})` : `url(${cel1})` }}>
            
            <div className='wlcm' style={{ zIndex: 1 }}>WELCOME TO VIDEO GAMES APP</div>
            <a href="#2" className="btnMove">
              <input type="image" src={arrowDown} alt="arrow down" />
            </a>
          </Section>
    
          <Section id="2" style={{ backgroundImage: window.innerWidth > 700 ? `url(${img2})` : `url(${cel2})` }}>
            <IntroConteiner>
              <div className='title' style={{ zIndex: 1 }}>FIND YOUR FAVORITE VIDEO GAME</div>
              <span className='descr'>You can search all available Video Games from our page. Your search can be filtered by genre, platform, and sorted alphabetically yordenar or by rating.</span>
              <Link to="/home" onClick={() => window.scroll(0, 0)}>
                <button>SEARCH</button>
              </Link>
            </IntroConteiner>
            <a href="#3" className="btnMove">
              <input type="image" src={arrowDown} alt="arrow down" />
            </a>
          </Section>
    
          <Section id="3" style={{ backgroundImage: window.innerWidth > 700 ? `url(${img3})` : `url(${cel3})` }}>
            <IntroConteiner>
                <div className='title' style={{ zIndex: 1 }}>ENJOY CREATING YOUR VIDEO GAME</div>
                <Link to="/create" onClick={() => window.scroll(0, 0)}>
                  <button>CREATE</button>
                </Link>
            </IntroConteiner>
            <a href="#1" className="btnMove">
              <input type="image" src={arrowTop} alt="arrow top" />
            </a>
          </Section>
        </>
      );
};

const fadeIn = keyframes`
    0%{
        opacity: 10;
    }
    100%{
        opacity: 0.2;
    }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  min-height: 100vh;
  position: relative;
  @media screen and (max-width: 700px) {
    background-attachment: scroll;
  }
  &::before {
    content: "";
    background-color: #000;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    opacity: 0.2;
    position: absolute;
    z-index: 0;
    animation: ${fadeIn} 5s ease-out;
  }
  .wlcm {
    color: #f1ee9ea6;
    font-family: 'Rubik Glitch';
    font-size: 3rem;
    letter-spacing: 3px;
    filter: drop-shadow(8px 8px 4px rgba(0, 0, 0, 0.869));
    position: absolute;
    top: 10rem;
    @media screen and (max-width: 700px) {
      align-self: center;
      font-size: 1rem;
      letter-spacing: 1px;
      top: 16.5rem;
      /* width: 60vw; */
    }
  }
  .btnMove {
    position: absolute;
    top: 90%;
    @media screen and (max-width: 700px) {
      top: 80%;
    }
    input[type="image"] {
      padding: 10px;
      width: 20px;
      height: 20px;
      font-size: 20px;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 50px;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        box-shadow: rgba(250, 250, 250, 0.7) 0px 0px 20px 0px; ;
      }
      &:active {
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        box-shadow: rgba(250, 250, 250, 0.7) 0px 0px 20px 0px; ;  
      }
    }
  }
`;

const IntroConteiner = styled.article`
  z-index: 2;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
  padding: 15px 50px 30px 50px;
  button {
    background-color: transparent;
    border: 1px solid white;
    margin-top: 8rem;
    border-radius: 6px;
    color: #ffffff;
    padding: 12px 40px 12px 40px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      color: #3d3c3c;
      box-shadow: rgba(250, 250, 250, 0.7) 0px 0px 20px 0px;
    }
    @media screen and (max-width: 700px) {
      &:active {
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        box-shadow: rgba(250, 250, 250, 0.7) 0px 0px 20px 0px; ;  
      }
    }
  }
  .title {
    color: #ffffff;
    font-family: 'Rubik Glitch';
    font-size: 2.5rem;
    letter-spacing: 3px;
    position: relative;
    top: 5rem;
    filter: drop-shadow(5px 5px 3px rgb(0, 0, 0));
  }
  .descr {
    font-size: 1rem;
    position: relative;
    letter-spacing: 2px;
    width: 50vw;
    top: 5.5rem;
    color: #ffffff;
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 120px;
    width: 60vw;
    padding: 15px 20px 30px 20px;
    .title {
      font-size: 1rem;
      letter-spacing: 1px;
      position: absolute;
      top: 10rem;
      width: 60vw;
    }
    .descr {
      font-size: .6rem;
      letter-spacing: 1px;
      top: 0rem;
      width: 80vw;
    }
  }
`;