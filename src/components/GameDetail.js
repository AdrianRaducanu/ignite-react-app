import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function GameDetail({ game }) {
  return (
    <StyledCardShadow>
      <StyledDetail>
        <StyledStats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <StyledInfo>
            <h3>Platforms</h3>
            <StyledPlatforms>
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </StyledPlatforms>
          </StyledInfo>
        </StyledStats>
        <StyledMedia>
          <img src={game.background_image} alt="img"></img>
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
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
`;
const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    object-fit: cover;
  }
`;
export default GameDetail;
