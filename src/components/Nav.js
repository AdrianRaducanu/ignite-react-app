import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearch, clearSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
//animation
import { fadeIn } from "../animation";

function Nav() {
  const dispatch = useDispatch();
  const [txtInput, setTxtInput] = useState("");

  const funcInput = (e) => {
    setTxtInput(e.target.value);
  };
  const funcSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(txtInput));
    setTxtInput("");
  };
  const funcLogoClear = () => {
    dispatch(clearSearch());
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={funcLogoClear}>
        <img src={logo} alt="logo"></img>
        <h1>Ignite</h1>
      </StyledLogo>
      <form className="searc">
        <input value={txtInput} onChange={funcInput} type="text"></input>
        <button onClick={funcSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  font-weight: bold;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-family: "Montserrat", sans-serif;
  }
  button {
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem 2rem;
    border: none;
    color: white;
    background: #ff7676;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
