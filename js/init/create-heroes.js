import { staticHeroes, createHero } from '../app.js';

createHeroes();

export const heroesGrid = document.querySelectorAll('.hero');

function createHeroes() {
  const heroArea = document.getElementById('heroes-section');

  staticHeroes.map((hero, index) => {
    //добавляем на страницу всех героев пользователя
    hero.pageId = index;
    heroArea.append(createHero(hero));
  });
}
