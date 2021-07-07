import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Game({ game, setActualGame }) {
  return (
    <StyledGame onClick={() => setActualGame(game)}>
      <h3>{game.name}</h3>

      <p>{game.released}</p>
      <img src={game.background_image} alt={game.name}></img>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
