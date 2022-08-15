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
            
            <div style={{ zIndex: 1 }}></div>
            <a href="#2" className="btnMove">
              <input type="image" src={arrowDown} alt="arrow down" />
            </a>
          </Section>
    
          <Section id="2" style={{ backgroundImage: `url(${img4})` }}>
            <IntroConteiner>
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
      }
    }
  }
`;

const IntroConteiner = styled.article`
  z-index: 2;
  text-align: center;
  width: 70%;
  padding: 15px 50px 30px 50px;
  button {
    background-color: transparent;
    border: 1px solid white;
    margin-top: 10rem;
    border-radius: 6px;
    color: #ffffff;
    padding: 5px 20px 5px 20px;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
    }
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 120px;
    width: 85%;
    padding: 15px 20px 30px 20px;
  }
`;