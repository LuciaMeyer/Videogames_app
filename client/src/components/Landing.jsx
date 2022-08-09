import React from 'react';
import { Link } from 'react-router-dom';
import arrowDown from "../img/arrow-down.png";
import arrowTop from "../img/arrow-top.png";
import styled, { keyframes } from "styled-components";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";


export const Landing = () => {
    return (
        <>
          <Section id="1" style={{ backgroundImage: `url(${img2})` }}>
            
            <div style={{ zIndex: 1 }}>
              <header>
                <h1>Welcome to Henry Video Games</h1>
              </header>
            </div>

            <a href="#2" className="btnMove">
              <input type="image" src={arrowDown} alt="arrow down" />
            </a>
          </Section>
    
          <Section id="2" style={{ backgroundImage: `url(${img4})` }}>
            <IntroConteiner>
              <h2>Find your favorite Video Games</h2>
              <p>
                You can search all available Video Games from our page. 
                Your search can be filtered by genre, platform, and sorted
                alphabetically or by rating.
              </p>
              <Link to="/home" onClick={() => window.scroll(0, 0)}>
                <button>Search</button>
              </Link>
            </IntroConteiner>
            <a href="#3" className="btnMove">
              <input type="image" src={arrowDown} alt="arrow down" />
            </a>
          </Section>
    
          <Section id="3" style={{ backgroundImage: `url(${img3})` }}>
            <IntroConteiner>
              <h2>Create your Video Game</h2>
              <p>
              Enjoy creating your own Video Game
              </p>
              <Link to="/create" onClick={() => window.scroll(0, 0)}>
                <button>Create</button>
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
  h1 {
    font: bold 300% cursive;
    text-align: center;
    margin-bottom: 90px;
    color: white
  }
  .btnMove {
    position: absolute;
    top: 90%;
    @media screen and (max-width: 700px) {
      top: 80%;
    }
    input[type="image"] {
      padding: 10px;
      width: 40px;
      height: 40px;
      font-size: 20px;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 50px;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
      }
    }
  }
`;

const IntroConteiner = styled.article`
  z-index: 2;
  text-align: center;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px 50px 30px 50px;
  button {
    background-color: transparent;
    border: 1px solid white;
    padding: 5px 20px 5px 20px;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 120px;
    width: 85%;
    padding: 15px 20px 30px 20px;
  }
`;