import { heroesParams, sortHeroesGrid } from '../app.js';

const { factions, based, classes, ascentions, sigItems } = heroesParams;

const sortParams = {
  faction: factions,
  base: based,
  class: classes,
  ascention: ascentions,
  si: sigItems,
  furniture: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
};

createSortButtons();

export function createSortButtons() {
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
