import { factions, based, classes } from './heroes-static.js';
import filterHeroesBy from './filter-heroes-by.js';
import hideFiltredHeroes from './hide-filtred-heroes.js';
import heroesUser from './heroes-user.js';

export default function () {
  const filters = [factions, based, classes];

  document.querySelectorAll('.btn-container').forEach((filterBlock, index) => {
    const filterType = filterBlock.classList[1].slice(15);

    let btnAll = document.createElement('button');
    btnAll.className = `filter__btn filter__btn--${filterType}`;
    btnAll.id = filterType + '_all';
    btnAll.style.cssText = `background: url("img/all.png");background-size: 30px 30px;`;
    btnAll.addEventListener('click', () =>
      hideFiltredHeroes(filterHeroesBy(filterBtn.id))
    );
    filterBlock.append(btnAll);

    for (let i = 0; i < filters[index].length; i++) {
      let filterBtn = document.createElement('button');
      filterBtn.className = `filter__btn filter__btn--${filterType}`;
      filterBtn.id = filterType + '_' + i;
      filterBtn.style.cssText = `background: url("img/${filterBtn.id}.png");background-size: 30px 30px;`;
      filterBtn.addEventListener('click', () =>
        hideFiltredHeroes(filterHeroesBy(filterBtn.id))
      );
      filterBlock.append(filterBtn);
    }
  });
}
