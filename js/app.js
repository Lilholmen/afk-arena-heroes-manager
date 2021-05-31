export { staticHeroes } from './res/static-heroes.js';
export { heroesParams } from './res/heroes-params.js';
export { userHeroes } from './res/user-heroes.js';
import './init/merge-heroes-data.js';
export { filterMask, filterFunction } from './filter/filter-machine.js';
export { heroesGrid } from './init/create-heroes.js';
export { changeButtonsActivity } from './filter/change-buttons-activity.js';
export { card } from './card.js';
export { sortHeroesGrid } from './sort/sort-machine.js';
export { createHero } from './init/create-hero.js';
import './init/create-filter-buttons.js';
import './init/create-sort-buttons.js';

/* const heroes1 = jsonLoader('js/heroes/heroes.json', (jsonStr) =>
  JSON.parse(jsonStr)
);

const userStats = jsonLoader('js/heroes/user.json', (jsonStr) =>
  JSON.parse(jsonStr)
);


export function jsonLoader(file, callback) {
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };

  rawFile.send(null);
}
 */
