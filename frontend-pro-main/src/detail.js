// DONE: #7 Separar api de index.js
import {getGameById, getCommentsOfGame} from './api-handler.js'
// DONE: #8 Separar funciones auxiliares `(generate*)` de renders en index.js
import {generateCommentSnippet} from './functions.js'
// DONE: #9 Separar funciones de index y de detail

// importamos jquery como una dependencia más de node_modules
import $ from "jquery";
// https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
const gameId = parseInt((new URLSearchParams(window.location.search)).get('id'));
(async () => {
    console.log(gameId)
  await drawGame(gameId);
  await drawComments(gameId);
})();

export async function drawGame(gameId) {
  let game = await getGameById(gameId);
  document.getElementById('game-name-title').innerHTML = game.name;
  // DONE: #5 breadcrumb???? Let's use jQuery!!
  $('h5.breadcrumb > span').html(game.name)
  document.getElementById('game-image').src = game.image;
  document.getElementById('game-image').alt = game.name;

  document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;
  document.getElementById('user-score').innerHTML = game.scores.userScore;

  document.getElementById('summary').innerHTML = game.summary;

  document.getElementById('platform').innerHTML = game.platform;
  document.getElementById('release-date').innerHTML = game.relaseDate;

}

// DONE: #2 Pedir ayuda para generateCommentSnippet
export async function drawComments(gameId) {
  console.log(gameId)
  let comments = await getCommentsOfGame(gameId);
  document.getElementById('comments')
      .appendChild(document.createElement('ul'))
      .setAttribute('id', 'comments-list');
  var i = 0;
  for (i; i < comments.length; i++) {
      document.getElementById('comments-list')
          .appendChild(document.createElement('li')).innerHTML = generateCommentSnippet(comments[i]);
  }
}
