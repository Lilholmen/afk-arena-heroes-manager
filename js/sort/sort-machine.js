import { userHeroes, heroesGrid } from '../app.js';

export function sortHeroesGrid(params, key) {
  const heroesContainer = document.querySelector('.heroes');

  const heroesSorted = [...userHeroes].sort((a, b) => {
    if (key === 'ascention') {
      //если сортировка происходит по вознесению то...
      if (a.ascention === 'ascended' && b.ascention === 'ascended') {
        //если оба сравн героя вознесенные, то приоритет по звездам
        return (b?.stars || 0) - (a?.stars || 0);
      }
      //сортировка по другим полям согласно индексам в базе
      return params.indexOf(a[key]) - params.indexOf(b[key]);
    }

    return params.indexOf(a[key]) - params.indexOf(b[key]);
  });

  const itemsArray = [];

  for (let i = 0; i < heroesGrid.length; i++) {
    itemsArray.push(heroesContainer.removeChild(heroesGrid[i]));
  }

  itemsArray
    .sort(
      (nodeA, nodeB) =>
        heroesSorted.indexOf(userHeroes[nodeA.id]) -
        heroesSorted.indexOf(userHeroes[nodeB.id])
    )
    .forEach((node) => heroesContainer.appendChild(node));
}
