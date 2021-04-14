import { factions, based, classes, heroes } from './heroes-static.js';
import heroesUser from './heroes-user.js';
import createFilterButtons from './create-filter-buttons.js';
import createHeroes from './create-heroes.js';
import filterHeroesBy from './filter-heroes-by.js';

createFilterButtons();
createHeroes();

export const heroesGrid = document.querySelectorAll('.hero');

/*function hideFiltredHeroes(filtred) {
  if (hideFiltredHeroes.multiCheckboxMask[0] === true)
    hideFiltredHeroes.showHero += filtred.map(
      (item) => (item = item.sessionId)
    );
  else
    hideFiltredHeroes.showHero = filtred.map((item) => (item = item.sessionId));
  heroesGrid.forEach((hero) => {
    if (!hideFiltredHeroes.showHero.includes(hero.id)) {
      hero.classList.add('hero--hidden');
    } else hero.classList.remove('hero--hidden');
  });
}

hideFiltredHeroes.multiCheckboxMask = [];
hideFiltredHeroes.showHero = [];

multiCheckbox.forEach((item, index) => {
  hideFiltredHeroes.multiCheckboxMask[index] = item.checked;

  item.addEventListener('click', () => {
    hideFiltredHeroes.multiCheckboxMask[index] = item.checked;
  });
});

function showFilterResult(filtred) {
  filtred.map((hero) =>
    console.log(`Name: ${hero.name};
Faction: ${hero.faction};
Ascention: ${hero.ascention};
Signture Item: ${hero.si};
Furniture: ${hero.furniture}/9.`)
  );
} */
