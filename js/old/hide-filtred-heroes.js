import { heroesGrid } from '../app.js';

export default function hideFiltredHeroes(filtred) {
  heroesGrid.forEach((hero) => {
    if (!shownHeroes[hero.id]) {
      hero.classList.add('hero--hidden');
    } else hero.classList.remove('hero--hidden');
  });
}
