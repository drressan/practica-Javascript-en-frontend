// DONE: #7 Separar api de index.js
import {getGames} from './api-handler.js'
// DONE: #8 Separar funciones auxiliares `(generate*)` de renders en index.js
import {generateGameSnippet} from './functions.js'
// DONE: #9 Separar funciones de index y de detail

(async () => {
  await drawListGames();
})();

export async function drawListGames() {
    let games = await getGames();
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'games-list');
    newDiv.setAttribute('class', 'row');
    
    document.getElementById('games').appendChild(newDiv);
    var i = 0;
    for (i; i < games.length; i++) {
      let snippetContainer = document.createElement('div');
      snippetContainer.setAttribute('class', 'col-6 col-sm-3');
      document.getElementById('games-list').appendChild(snippetContainer).innerHTML = generateGameSnippet(games[i]);
    }
}
