import {
  factions,
  based,
  classes,
  ascentions,
  heroesUser,
  heroesGrid,
} from '../app.js';

const sortParams = {
  faction: factions,
  based: based,
  class: classes,
  ascention: ascentions,
};

createSortButtons();

function sortHeroesGrid(params, key) {
  const heroesContainer = document.querySelector('.heroes');

  const heroesSorted = [...heroesUser];
  let itemsArray = [];
  heroesSorted.sort((a, b) => params.indexOf(a[key]) - params.indexOf(b[key]));
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
/* for (let i = 0; i < heroesSorted.length; i++)
  console.log(heroesSorted[i].class);
 */
function createSortButtons() {
  const sortButtonsArea = document.querySelector('.sort__btn-container');
  for (let param in sortParams) {
    let sortBtn = document.createElement('button');
    sortBtn.className = 'sort_btn';
    sortBtn.textContent = 'by ' + param;
    sortBtn.addEventListener('click', () => {
      sortHeroesGrid(sortParams[param], param);
    });
    sortButtonsArea.append(sortBtn);
  }
}
