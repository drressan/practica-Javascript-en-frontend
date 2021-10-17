//DONE: #1 implementar api (getGames(), getGameById()). Mirar en la documentación de json-server
const API_ENDPOINT = 'http://localhost:3033';

export const getGames = async () => {
  const response = await fetch(`${API_ENDPOINT}/games`);
  return response.json();
}

export const getGameById = async(gameId) => {
  const response = await fetch(`${API_ENDPOINT}/games/${gameId}`);
  return response.json();
}

export const getCommentsOfGame = async(gameId) => {
  const response = await fetch(`${API_ENDPOINT}/games/${gameId}/comments?_expand=user`);
  return response.json();
}