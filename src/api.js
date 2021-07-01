const base_url = `https://api.rawg.io/api/`;
const key_url = `&key=${process.env.REACT_APP_API_KEY}`;
//
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;
//
const popular_games = `games?dates=${lastYear}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
  return `${base_url}${popular_games}${key_url}`;
};
console.log(popularGamesURL());
