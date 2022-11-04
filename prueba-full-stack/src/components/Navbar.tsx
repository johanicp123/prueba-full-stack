import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="/">HOMBRE</a>
          <a onClick={handleClick} href="/">MUJER</a>
          <a onClick={handleClick} href="/">BLOG</a>
          <a onClick={handleClick} href="/">HISTORIA</a>
          <a onClick={handleClick} href="/">TIENDAS</a>
        </div>
        <div className="burguer">
          <BurgerButton clicked={clicked} handleClik={handleClick} />
        </div>
        <BgDiv className = {`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  a {
    font-family:'Playfair Display', serif;
    color: #707070;
    font-weight: 400;
    margin-right: 1rem;
    text-decoration: none;
  }
  padding: 0.4rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  
  

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right:0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a {
      color: #707070;
      font-size: 1.5rem;
      display: block;
    }
    @media (min-width: 600px) {
      position: initial;
      margin: 2.5rem 0 0 0;
      a {
        font-size: .75rem;
        color: #707070;
        display: inline;
      }
      a:first-child {
      margin-left:1.75rem; 
      }
      display:block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    right: 0;
    left: 0;
    text-align: center;
    a {
      font-size:2rem;
      margin-top:1rem;
      color: #white;
    }
  }

  .burguer {
    @media (max-width: 600px) {
      margin:.5rem 5rem 0 0;
    }
    @media (min-width: 600px) {
      display: none;
    }
  }
`

const BgDiv = styled.div`
position: absolute;
blackground-color:#333;
width:100%;
height:100%;
top:-1000px;
left:-2000px;
z-index:-1;
transition: all .6s ease;
&.active{
  border-radius:0 0 80% 0;
  top:0;
  left:0;
  width:100%;
height:100%;
}
`;