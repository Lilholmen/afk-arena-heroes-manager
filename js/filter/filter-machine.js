import {
  factions,
  based,
  classes,
  heroesUser,
  heroesGrid,
  changeButtonsActivity,
} from '../app.js';

export const filterMask = {
  faction: [],
  base: [],
  class: [],
};

export function filterFunction(filterButtonId) {
  //разбиваем полученую строку на массив [тип параметра, его id(число или a)]
  const params = [filterButtonId.slice(0, -2), +filterButtonId.slice(-1)];

  if (!isNaN(params[1])) {
    //если нажата кнопка НЕ all
    if (filterMask[params[0]].includes(params[1])) {
      //если такой фильтр уже применён то удаляем его
      filterMask[params[0]] = filterMask[params[0]].filter(
        (item) => item !== params[1]
      );
      changeButtonsActivity(params[0], params[1], -1);
    } else {
      //если такой фильтр еще не включен, то включаем его
      filterMask[params[0]].push(+params[1]);
      changeButtonsActivity(params[0], params[1]);
    }
  } else {
    //если нажата кнопка all
    filterMask[params[0]] = [];
    changeButtonsActivity(params[0], params[1]);
  }

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
