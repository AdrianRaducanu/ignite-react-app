import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { popUp } from "../animation";

function Game({ game, setActualGame }) {
  console.log(typeof game.id.toString());
  const funcSetGameAndLockBackground = () => {
    setActualGame(game);
    document.body.style.overflow = "hidden"; //nu permite backgroundului sa mai fie scrollabil dupa ce intru in detalii
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={game.id.toString()}
      onClick={funcSetGameAndLockBackground}
    >
      <Link to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        {game.released !== null ? <p>{game.released}</p> : <p>Unknown</p>}

        <motion.img
          layoutId={`image ${game.id.toString()}`}
          src={game.background_image}
          alt={game.name}
        ></motion.img>
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
