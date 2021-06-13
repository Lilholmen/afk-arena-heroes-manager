import { filterFunction } from '../app.js';

createFilterButtons();

function createFilterButtons() {
  const filters = [7, 3, 5, 4];

  document.querySelectorAll('.btn-container').forEach((filterBlock, index) => {
    const filterType = filterBlock.classList[1].slice(15);

    const btnAll = document.createElement('button');
    btnAll.className = `filter__btn filter__btn--active filter__btn--${filterType}`;
    btnAll.id = filterType + '_all';
    btnAll.style.backgroundImage = 'url("img/all.png")';
    btnAll.addEventListener('click', () => {
      filterFunction(btnAll.id.slice(0, -2), 'all');
    });
    filterBlock.append(btnAll);

    for (let i = 0; i < filters[index]; i++) {
      const filterBtn = document.createElement('button');
      filterBtn.className = `filter__btn filter__btn--${filterType}`;
      filterBtn.id = filterType + '_' + i;
      filterBtn.style.backgroundImage = 'url("img/' + filterBtn.id + '.png")';
      filterBtn.addEventListener('click', () =>
        filterFunction(filterBtn.id, +filterBtn.id.slice(-1))
      );
      filterBlock.append(filterBtn);
    }
  });
}
