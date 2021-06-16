import { filterFunction } from '../app.js';

createFilterButtons();

function createFilterButtons() {
  const filters = [7, 3, 5, 4];

  document.querySelectorAll('.btn-container').forEach((filterBlock, index) => {
    const filterType = filterBlock.classList[1].slice(15);

    document
      .querySelector('.filters__btn--all')
      .addEventListener('click', () => {
        filterFunction(filterType + '_a', 'all');
      });

    for (let i = 0; i < filters[index]; i++) {
      const filterBtn = document.createElement('button');
      filterBtn.className = `filters__btn filters__btn--${filterType}`;
      filterBtn.id = filterType + '_' + i;
      filterBtn.style.backgroundImage = 'url("img/' + filterBtn.id + '.png")';
      filterBtn.addEventListener('click', () =>
        filterFunction(filterBtn.id, +filterBtn.id.slice(-1))
      );
      filterBlock.append(filterBtn);
    }
  });
}
