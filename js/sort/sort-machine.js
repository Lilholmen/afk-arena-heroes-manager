import { heroesUser, heroesGrid } from '../app.js';

export function sortHeroesGrid(params, key) {
  const heroesContainer = document.querySelector('.heroes');

  const heroesSorted = [...heroesUser].sort(
    (a, b) => params.indexOf(a[key]) - params.indexOf(b[key])
  );
  const itemsArray = [];

  for (let i = 0; i < heroesGrid.length; i++) {
    itemsArray.push(heroesContainer.removeChild(heroesGrid[i]));
  }

  itemsArray
    .sort(
      (nodeA, nodeB) =>
        heroesSorted.indexOf(heroesUser[nodeA.id]) -
        heroesSorted.indexOf(heroesUser[nodeB.id])
    )
    .forEach((node) => heroesContainer.appendChild(node));
}
