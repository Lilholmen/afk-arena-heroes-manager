import { heroesGrid } from './app.js';

export default function hideFiltredHeroes(filtred) {
  const filtredHeroesId = filtred.map((item) => (item = item.sessionId));

  heroesGrid.forEach((hero) => {
    if (!filtredHeroesId.includes(hero.id)) {
      hero.classList.add('hero--hidden');
    } else hero.classList.remove('hero--hidden');
  });
}
