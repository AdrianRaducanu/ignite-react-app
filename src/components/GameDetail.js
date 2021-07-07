import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
//platforms
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

function GameDetail({ game, pathId }) {
  //revenirea la scrollare dupa inchiderea ferestrei cu detalii SI REVENIREA LA HOME
  const history = useHistory();
  const funcExitDetail = (e) => {
    const element = e.target;

    //console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //rating as stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img alt="star" className="star" key={i} src={starFull}></img>
        );
      } else {
        stars.push(
          <img alt="star" className="star" key={i} src={starEmpty}></img>
        );
      }
    }
    return stars;
  };
  //platform icons
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <StyledCardShadow onClick={funcExitDetail} className="shadow">
      <StyledDetail layoutId={pathId}>
        <StyledStats>
          <div className="rating">
            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
            <motion.p layoutId={`rate ${pathId}`}>
              Rating: {game.rating}
            </motion.p>
            {getStars()}
          </div>
          <StyledInfo>
            <h3>Platforms</h3>
            <StyledPlatforms>
              {game.platforms.map((data) => (
                <img
                  key={data.platform.id}
                  src={getPlatform(data.platform.name)}
                  alt={data.platform.id}
                ></img>
              ))}
            </StyledPlatforms>
          </StyledInfo>
        </StyledStats>
        <StyledMedia>
          <motion.img
            layoutId={`image ${pathId}`}
            src={game.background_image}
            alt="img"
          ></motion.img>
        </StyledMedia>
        <div className="gallery">
          {game.short_screenshots.map((data) =>
            data.image !== game.background_image ? (
              <img src={data.image} alt="ss" key={data.image}></img>
            ) : (
              ""
            )
          )}
        </div>
      </StyledDetail>
    </StyledCardShadow>
  );
}
const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;
const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: white;
  position: absolute;
  left: 10%;
  top: 2%;

  color: black;
  img {
    width: 100%;
  }
`;
const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  .star {
    width: 1rem;
    height: 1rem;
    display: inline;
  }
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
  font-weight: bold;
  h3 {
    margin-bottom: 1rem;
  }
`;
const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    height: 1.8rem;
  }
`;
const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    object-fit: cover;
  }
`;
export default GameDetail;
