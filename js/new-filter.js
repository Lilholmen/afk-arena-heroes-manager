import { factions, based, classes } from './heroes-static.js';
import { heroesGrid } from './app.js';
import heroesUser from './heroes-user.js';

const filterMask = {
  faction: [],
  base: [],
  class: [],
};

export function filterFunction(filterButtonId) {
  const params = [filterButtonId.slice(0, -2), +filterButtonId.slice(-1)];

  if (!isNaN(params[1])) {
    if (filterMask[params[0]].includes(params[1]))
      filterMask[params[0]] = filterMask[params[0]].filter(
        (item) => item !== params[1]
      );
    else filterMask[params[0]].push(+params[1]);
  } else filterMask[params[0]] = [];

  heroesUser.forEach((hero) => {
    if (useFilterMask(hero)) {
      heroesGrid[hero.sessionId].classList.add('hero--hidden');
    } else heroesGrid[hero.sessionId].classList.remove('hero--hidden');
  });

  console.log(filterMask);
}

function useFilterMask(hero) {
  let successFilterCounter = 0;

  if (
    filterMask.faction.length === 0 ||
    filterMask.faction.includes(factions.indexOf(hero.faction))
  )
    successFilterCounter++;
  if (
    filterMask.base.length === 0 ||
    filterMask.base.includes(based.indexOf(hero.base))
  )
    successFilterCounter++;
  if (
    filterMask.class.length === 0 ||
    filterMask.class.includes(classes.indexOf(hero.class))
  )
    successFilterCounter++;

  return successFilterCounter < 3;
}
