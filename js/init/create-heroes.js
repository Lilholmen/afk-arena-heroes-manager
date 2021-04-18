import { factions, based, classes, heroes, heroesUser, card } from '../app.js';

createHeroes();

export const heroesGrid = document.querySelectorAll('.hero');

function createHeroes() {
  const heroArea = document.getElementById('heroes-section');

  heroesUser.map((userHero) => {
    //объеденяем базовые хар-ки героев с пользовательским
    Object.assign(
      userHero,
      heroes.find((baseHero) => baseHero.id === userHero.id)
    );
  });

  heroesUser.map((item, index) => {
    //добавляем на страницу всех героев пользователя
    let heroTmp = document.createElement('div');
    heroTmp.className = 'hero';
    heroTmp.id = index;
    heroTmp.style.cssText = generateImgName(item);
    item.sessionId = heroTmp.id;
    heroTmp.addEventListener('mouseenter', (event) => card(event));
    heroArea.append(heroTmp);
  });

  function generateImgName(hero) {
    return (
      'background: url("img/' +
      factions.indexOf(hero.faction) +
      based.indexOf(hero.base) +
      classes.indexOf(hero.class) +
      '_' +
      hero.name.slice(0, 3) +
      '.jpg");background-size: 64px 64px;'
    );
  }
}
