import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Game({ game, setActualGame }) {
  const funcSetGameAndLockBackground = () => {
    setActualGame(game);
    document.body.style.overflow = "hidden"; //nu permite backgroundului sa mai fie scrollabil dupa ce intru in detalii
  };
  return (
    <StyledGame onClick={funcSetGameAndLockBackground}>
      <Link to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={game.background_image} alt={game.name}></img>
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow: hidden;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
