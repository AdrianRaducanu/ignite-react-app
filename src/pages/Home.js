import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//style
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"; //AnimatePresence functioneaza cand avem ceva toggle, de exemplu path ul se schimba
//AnimateSharedLayout are nevoie de id uri diferite pt fiecare copmonenta pe care o wrapuieste
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

function Home() {
  //punerea datelor din api in redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //extragerea datelor din redux
  // {x, y, z} = ... <=> ceva = ... , ceva.x, ceva.y, ceva.z
  const { popular, newGames, upcoming, isLoading, searched } = useSelector(
    (state) => state.games
  );
  //

  const [actualGame, setActualGame] = useState({
    name: "",
    platforms: [],
    rating: "",
    background_image: "",
    short_screenshots: [],
  });

  //router
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);

  return (
    <>
      {!isLoading && (
        <StyledGameList>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} game={actualGame} />}
            </AnimatePresence>
            {searched.length ? (
              <>
                <h2>Searched Games</h2>
                <StyledGames>
                  {searched.map((x) => (
                    <Game game={x} key={x.id} setActualGame={setActualGame} />
                  ))}
                </StyledGames>
              </>
            ) : (
              ""
            )}
            <h2>Upcoming Games</h2>
            <StyledGames>
              {upcoming.map((x) => (
                <Game game={x} key={x.id} setActualGame={setActualGame} />
              ))}
            </StyledGames>
            <h2>Popular Games</h2>
            <StyledGames>
              {popular.map((x) => (
                <Game game={x} key={x.id} setActualGame={setActualGame} />
              ))}
            </StyledGames>
            <h2>New Games</h2>
            <StyledGames>
              {newGames.map((x) => (
                <Game game={x} key={x.id} setActualGame={setActualGame} />
              ))}
            </StyledGames>
          </AnimateSharedLayout>
        </StyledGameList>
      )}
    </>
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
