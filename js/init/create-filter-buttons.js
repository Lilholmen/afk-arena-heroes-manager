import { factions, based, classes, filterFunction } from '../app.js';

createFilterButtons();

function createFilterButtons() {
  const filters = [factions, based, classes];

  document.querySelectorAll('.btn-container').forEach((filterBlock, index) => {
    const filterType = filterBlock.classList[1].slice(15);

    let btnAll = document.createElement('button');
    btnAll.className = `filter__btn filter__btn--active filter__btn--${filterType}`;
    btnAll.id = filterType + '_all';
    btnAll.style.cssText = `background: url("img/all.png");background-size: 30px 30px;background-position:center;`;
    btnAll.addEventListener('click', () => {
      filterFunction(btnAll.id.slice(0, -2));
    });
    filterBlock.append(btnAll);

    for (let i = 0; i < filters[index].length; i++) {
      let filterBtn = document.createElement('button');
      filterBtn.className = `filter__btn filter__btn--${filterType}`;
      filterBtn.id = filterType + '_' + i;
      filterBtn.style.cssText = `background: url("img/${filterBtn.id}.png");background-size: 30px 30px;background-position:center;`;
      filterBtn.addEventListener('click', () => filterFunction(filterBtn.id));
      filterBlock.append(filterBtn);
    }
  });
}
