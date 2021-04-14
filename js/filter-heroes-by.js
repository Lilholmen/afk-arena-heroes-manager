import { factions, based, classes } from './heroes-static.js';
import heroesUser from './heroes-user.js';

export default function (filterBy) {
  const sliced = [filterBy.slice(0, -2), filterBy.slice(-1)];

  return heroesUser.filter(
    (hero) =>
      hero[sliced[0]] ===
      (sliced[0] === 'faction'
        ? factions
        : sliced[0] === 'base'
        ? based
        : classes)[sliced[1] !== 'all']
  );
}
