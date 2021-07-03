import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//style
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import Game from "../components/Game";

function Home() {
  //punerea datelor din api in redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //extragerea datelor din redux
  // {x, y, z} = ... <=> ceva = ... , ceva.x, ceva.y, ceva.z
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  //

  return (
    <StyledGameList>
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcoming.map((x) => (
          <Game
            name={x.name}
            released={x.released}
            id={x.id}
            img={x.background_image}
            key={x.id}
          />
        ))}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((x) => (
          <Game
            name={x.name}
            released={x.released}
            id={x.id}
            img={x.background_image}
            key={x.id}
          />
        ))}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((x) => (
          <Game
            name={x.name}
            released={x.released}
            id={x.id}
            img={x.background_image}
            key={x.id}
          />
        ))}
      </StyledGames>
    </StyledGameList>
  );
}

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
