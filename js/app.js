import { factions, based, classes, heroes } from './heroes-static.js';
import heroesUser from './heroes-user.js';
import createFilterButtons from './create-filter-buttons.js';
import createHeroes from './create-heroes.js';
import filterHeroesBy from './filter-heroes-by.js';

createFilterButtons();
createHeroes();

export const heroesGrid = document.querySelectorAll('.hero');
