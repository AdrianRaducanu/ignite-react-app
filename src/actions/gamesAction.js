import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchedGamesURL,
} from "../api";

//ActionCreator

export const loadGames = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchGames = await axios.get(searchedGamesURL(gameName));

  dispatch({
    type: "SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

export const clearSearch = () => async (dispatch) => {
  dispatch({
    type: "CLEAR",
  });
};
