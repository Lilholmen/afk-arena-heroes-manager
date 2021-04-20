import { heroesParams, filterFunction } from '../app.js';

const { factions, based, classes, ascentions } = heroesParams;

createFilterButtons();

function createFilterButtons() {
  const filters = [factions, based, classes, ascentions];

  document.querySelectorAll('.btn-container').forEach((filterBlock, index) => {
    const filterType = filterBlock.classList[1].slice(15);

    let btnAll = document.createElement('button');
    btnAll.className = `filter__btn filter__btn--active filter__btn--${filterType}`;
    btnAll.id = filterType + '_all';
    btnAll.style.cssText = createCSSText();
    btnAll.addEventListener('click', () => {
      filterFunction(btnAll.id.slice(0, -2));
    });
    filterBlock.append(btnAll);

    for (let i = 0; i < filters[index].length; i++) {
      let filterBtn = document.createElement('button');
      filterBtn.className = `filter__btn filter__btn--${filterType}`;
      filterBtn.id = filterType + '_' + i;
      filterBtn.style.cssText = createCSSText(filterBtn.id);
      filterBtn.addEventListener('click', () => filterFunction(filterBtn.id));
      filterBlock.append(filterBtn);
    }
  });
}

function createCSSText(id) {
  //задает кнопке CSS свойства бэкграунда
  return `background: url("img/${
    id || 'all'
  }.png");background-size: 30px 30px;background-position:center;`;
}
